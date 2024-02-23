const puppeteer = require('puppeteer');

async function scrapeWebsite() {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the website you want to scrape
  await page.goto('https://example.com');

  // Extract data from the page
  const title = await page.title();
  const content = await page.content();

  // You can further process the 'content' variable using libraries like Cheerio or regular expressions

  // Close the browser
  await browser.close();

  return { title, content };
}

scrapeWebsite().then((result) => {
  console.log('Title:', result.title);
  console.log('Content:', result.content);
});
