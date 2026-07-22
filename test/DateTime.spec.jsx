import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import moment from 'moment';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import Datetime from '../src/DateTime';

const date = '02/14/2024 3:30 PM';

function renderDatetime(props = {}) {
	return render(
		<Datetime
			initialViewDate={ date }
			dateFormat="MM/DD/YYYY"
			timeFormat="h:mm A"
			{ ...props }
		/>
	);
}

function root(container) {
	return container.querySelector('.rdt');
}

function currentMonth(container) {
	return container.querySelector('.rdtDays .rdtSwitch');
}

beforeAll(() => {
	moment.locale('en');
});

describe('rendering and values', () => {
	it('renders an input and the configured month', () => {
		const { container } = renderDatetime();

		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(currentMonth(container)).toHaveTextContent('February 2024');
		expect(container.querySelectorAll('.rdtDay')).toHaveLength(42);
	});

	it('renders a static, always-open picker without an input', () => {
		const { container } = renderDatetime({ input: false });

		expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
		expect(root(container)).toHaveClass('rdtStatic', 'rdtOpen');
	});

	it('supports Date, Moment, and string initial values', () => {
		const values = [
			new Date(2024, 1, 14, 15, 30),
			moment('2024-02-14T15:30:00'),
			date,
		];

		for (const initialValue of values) {
			const { unmount } = renderDatetime({ initialValue });
			expect(screen.getByRole('textbox')).toHaveValue(date);
			unmount();
		}
	});

	it('passes input props and additional root classes through', () => {
		const { container } = renderDatetime({
			className: [ 'first', 'second' ],
			inputProps: { name: 'appointment', placeholder: 'Choose a date', required: true },
		});

		expect(root(container)).toHaveClass('first', 'second');
		expect(screen.getByRole('textbox')).toHaveAttribute('name', 'appointment');
		expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Choose a date');
		expect(screen.getByRole('textbox')).toBeRequired();
	});

	it('supports custom input and view renderers', () => {
		const renderInput = vi.fn((props) => <input aria-label="custom date" { ...props } />);
		const renderView = vi.fn((view, renderDefault) => (
			<section data-testid={`view-${view}`}>{ renderDefault() }</section>
		));
		renderDatetime({ renderInput, renderView });

		expect(screen.getByLabelText('custom date')).toBeInTheDocument();
		expect(screen.getByTestId('view-days')).toBeInTheDocument();
		expect(renderInput).toHaveBeenCalled();
		expect(renderView).toHaveBeenCalled();
	});
});

describe('opening and closing', () => {
	it('opens on focus and reports the open event', () => {
		const onOpen = vi.fn();
		const { container } = renderDatetime({ onOpen });

		fireEvent.focus(screen.getByRole('textbox'));

		expect(root(container)).toHaveClass('rdtOpen');
		expect(onOpen).toHaveBeenCalledOnce();
	});

	it('respects a controlled open prop', () => {
		const { container, rerender } = renderDatetime({ open: false });
		fireEvent.focus(screen.getByRole('textbox'));
		expect(root(container)).not.toHaveClass('rdtOpen');

		rerender(
			<Datetime
				initialViewDate={ date }
				dateFormat="MM/DD/YYYY"
				timeFormat="h:mm A"
				open
			/>
		);
		expect(root(container)).toHaveClass('rdtOpen');
	});

	it('stays open for events inside the component', () => {
		const { container } = renderDatetime();
		fireEvent.focus(screen.getByRole('textbox'));

		fireEvent.mouseDown(currentMonth(container));

		expect(root(container)).toHaveClass('rdtOpen');
	});

	it.each([ 'mouseDown', 'touchStart' ])('closes on an outside %s event', eventName => {
		const onClose = vi.fn();
		const { container } = renderDatetime({ initialValue: date, onClose });
		fireEvent.focus(screen.getByRole('textbox'));

		fireEvent[eventName](document.body);

		expect(root(container)).not.toHaveClass('rdtOpen');
		expect(onClose).toHaveBeenCalledOnce();
		expect(moment.isMoment(onClose.mock.calls[0][0])).toBe(true);
	});

	it('does not close outside when closeOnClickOutside is false', () => {
		const { container } = renderDatetime({ closeOnClickOutside: false });
		fireEvent.focus(screen.getByRole('textbox'));

		fireEvent.mouseDown(document.body);

		expect(root(container)).toHaveClass('rdtOpen');
	});

	it('closes on tab unless closeOnTab is false', () => {
		const first = renderDatetime();
		fireEvent.focus(screen.getByRole('textbox'));
		fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Tab', which: 9 });
		expect(root(first.container)).not.toHaveClass('rdtOpen');
		first.unmount();

		const second = renderDatetime({ closeOnTab: false });
		fireEvent.focus(screen.getByRole('textbox'));
		fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Tab', which: 9 });
		expect(root(second.container)).toHaveClass('rdtOpen');
	});

	it('removes document listeners when unmounted', () => {
		const add = vi.spyOn(document, 'addEventListener');
		const remove = vi.spyOn(document, 'removeEventListener');
		const { unmount } = renderDatetime();
		const mouseHandler = add.mock.calls.find(([event]) => event === 'mousedown')[1];
		const touchHandler = add.mock.calls.find(([event]) => event === 'touchstart')[1];

		unmount();

		expect(remove).toHaveBeenCalledWith('mousedown', mouseHandler);
		expect(remove).toHaveBeenCalledWith('touchstart', touchHandler);
	});
});

describe('selection and input', () => {
	it('returns a Moment when manually entered input is valid', () => {
		const onChange = vi.fn();
		renderDatetime({ onChange });

		fireEvent.change(screen.getByRole('textbox'), { target: { value: date } });

		expect(moment.isMoment(onChange.mock.calls[0][0])).toBe(true);
		expect(onChange.mock.calls[0][0].format('YYYY-MM-DD HH:mm')).toBe('2024-02-14 15:30');
	});

	it('returns the raw value for invalid strict input', () => {
		const onChange = vi.fn();
		renderDatetime({ onChange });

		fireEvent.change(screen.getByRole('textbox'), { target: { value: 'not a date' } });

		expect(onChange).toHaveBeenLastCalledWith('not a date');
	});

	it('clears the value from the clear button', () => {
		const onChange = vi.fn();
		const { container } = renderDatetime({ clearableInput: true, initialValue: date, onChange });

		fireEvent.click(container.querySelector('.clearButton'));

		expect(screen.getByRole('textbox')).toHaveValue('');
		expect(onChange).toHaveBeenLastCalledWith('');
	});

	it('selects a day and optionally closes the picker', () => {
		const onChange = vi.fn();
		const onClose = vi.fn();
		const { container } = renderDatetime({ closeOnSelect: true, onChange, onClose });
		fireEvent.focus(screen.getByRole('textbox'));
		const day = container.querySelector('.rdtDay[data-value="14"][data-month="1"]');

		fireEvent.click(day);

		expect(onChange).toHaveBeenCalledOnce();
		expect(onChange.mock.calls[0][0].format('YYYY-MM-DD')).toBe('2024-02-14');
		expect(onClose).toHaveBeenCalledOnce();
		expect(root(container)).not.toHaveClass('rdtOpen');
	});
});

describe('navigation and public API', () => {
	it('navigates months and reports the direction', () => {
		const onNavigateBack = vi.fn();
		const onNavigateForward = vi.fn();
		const { container } = renderDatetime({ onNavigateBack, onNavigateForward });
		const previous = container.querySelector('.rdtPrev');
		const next = container.querySelector('.rdtNext');

		fireEvent.click(previous);
		expect(currentMonth(container)).toHaveTextContent('January 2024');
		expect(onNavigateBack).toHaveBeenCalledWith(1, 'months');

		fireEvent.click(next);
		expect(currentMonth(container)).toHaveTextContent('February 2024');
		expect(onNavigateForward).toHaveBeenCalledWith(1, 'months');
	});

	it('switches between day, month, and year views', () => {
		const onNavigate = vi.fn();
		const { container } = renderDatetime({ onNavigate });

		fireEvent.click(currentMonth(container));
		expect(container.querySelector('.rdtMonths')).toBeInTheDocument();
		fireEvent.click(container.querySelector('.rdtMonths .rdtSwitch'));
		expect(container.querySelector('.rdtYears')).toBeInTheDocument();
		expect(onNavigate.mock.calls.map(([view]) => view)).toEqual([ 'months', 'years' ]);
	});

	it('supports imperative setViewDate and navigate methods', () => {
		const ref = React.createRef();
		const { container } = render(
			<Datetime ref={ ref } initialViewDate="02/14/2024" dateFormat="MM/DD/YYYY" timeFormat={ false } />
		);

		act(() => ref.current.setViewDate('12/24/2025'));
		expect(currentMonth(container)).toHaveTextContent('December 2025');

		act(() => ref.current.navigate('months'));
		expect(container.querySelector('.rdtMonths')).toBeInTheDocument();
	});

	it('renders without React findDOMNode warnings', () => {
		const error = vi.spyOn(console, 'error').mockImplementation(() => {});
		renderDatetime();

		expect(error.mock.calls.flat().join(' ')).not.toMatch(/findDOMNode/i);
	});
});
