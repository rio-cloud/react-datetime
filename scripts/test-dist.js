const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

async function testDist() {
	const commonJsModule = require('@rio-cloud/react-datetime');
	const esmModule = await import('@rio-cloud/react-datetime');

	if (typeof commonJsModule.default !== 'function') {
		throw new Error('The CommonJS build must expose the Datetime component as its default export.');
	}

	if (typeof esmModule.default !== 'function') {
		throw new Error('The ESM build must expose the Datetime component as its default export.');
	}

	for (const [format, Datetime] of [
		['CommonJS', commonJsModule.default],
		['ESM', esmModule.default],
	]) {
		if (typeof Datetime.moment !== 'function') {
			throw new Error(`The ${format} build must expose Moment as a callable function.`);
		}

		const markup = renderToStaticMarkup(React.createElement(Datetime, {
			dateFormat: 'MM/DD/YYYY',
			initialViewDate: '02/14/2024',
			timeFormat: false,
		}));

		if (!markup.includes('class="rdt"') || !markup.includes('February 2024')) {
			throw new Error(`The ${format} build could not be rendered with the installed React version.`);
		}
	}
}

testDist().catch(error => {
	console.error(error);
	process.exitCode = 1;
});
