import { checkUrl } from "./urlChecker"

test('test that valid url returns true', () => {
    expect(checkUrl("https://www.udacity.com")).toBe(true);
});

test('test that invalid url returns false', () => {
    expect(checkUrl("invalid url")).toBe(false);
});
