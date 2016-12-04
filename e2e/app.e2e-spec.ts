import {AngularCliBeginnerPage} from './app.po';

describe('angular-cli-beginner App', function () {
	let page: AngularCliBeginnerPage;

	beforeEach(() => {
		page = new AngularCliBeginnerPage();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('app works!');
	});
});
