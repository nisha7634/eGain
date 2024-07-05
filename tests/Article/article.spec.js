import { test, expect } from "@playwright/test";
import { promises } from "dns";
const data = require("../../testdata/login.json")
const { LoginPage } = require('../../page-objects/login-pages/login.page').default;
const { ArticlePage } = require('../../page-objects/Articles/article.page').default;
const { TopicPage } = require('../../page-objects/Topics/topics.page').default;
const randomNumber = Math.floor(Math.random() * 9999);
const fullTitle = `Vtest${randomNumber}`;
const topicName = `test${randomNumber}`
const portalName = `eGain${randomNumber}`

test('KB-848 - Verifying that reviewer(contributor) of any stage get notification when any article is moved into its stage', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const articlePage = new ArticlePage(page)
    await loginPage.navigate();
    await loginPage.loginToApplication(data.validUser1.username, data.validUser1.password);
    await loginPage.clickOnRetainSession()
    await loginPage.clickOnKnowledgeIcon()
    // await articlePage.clickOnCloseIcon()
    await articlePage.clickOnArticle()
    await articlePage.selectFolderF1()
    await articlePage.clickOnCreateArticleButton()
    await articlePage.articleTitleNameField(fullTitle)
    await articlePage.clickOnDoneButton()
    await page.waitForTimeout(5000)
    await articlePage.verifyArticleTitle(fullTitle)
    await articlePage.clickSendTo()
    await articlePage.verifyStagesAndClickNotification();
    await page.waitForTimeout(5000)
});

test('KB-1087 - Verify that author is able to create portal.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const articlePage = new ArticlePage(page)
    const topicPage = new TopicPage(page)
    await loginPage.navigate();
    await loginPage.loginToApplication(data.validUser1.username, data.validUser1.password);
    await loginPage.clickOnRetainSession()
    await loginPage.clickOnKnowledgeIcon()
    // await loginPage.clickOnCloseIcon()
    await articlePage.clickOnArticle()
    await articlePage.selectFolderF1()  
    await articlePage.clickOnCreateArticleButton()
    await articlePage.articleTitleNameField(fullTitle)
    await articlePage.clickOnDoneButton()
    await page.waitForTimeout(5000)
    await articlePage.verifyArticleTitle(fullTitle)
    await topicPage.clickOnTopic()
    await topicPage.clickOnAddTopic()
    await topicPage.verifyCreateTopiWindow()
    await topicPage.topicNameField(topicName)
    await topicPage.clickOnSaveButton()
    await page.waitForTimeout(5000)
    await topicPage.clickOnArticlesInTopic()
    await topicPage.clickOnAddButton()
    await topicPage.selectF1Article()
    await topicPage.searchandSelectArticleInTopic(fullTitle)
    await loginPage.clickOnPortals()
    await loginPage.clickOnAddPortal()
    await loginPage.createPortal(portalName)
  });

test('KB-1798 - Verify that user is able to add attachment in article through drag n Drop option', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const articlePage = new ArticlePage(page)
    await loginPage.navigate();
    await loginPage.loginToApplication(data.validUser1.username, data.validUser1.password);
    await loginPage.clickOnRetainSession()
    await loginPage.clickOnKnowledgeIcon()
    await articlePage.clickOnArticle()
    await articlePage.selectFolderF1()
    // await articlePage.clickOnCloseIcon()
    await articlePage.clickOnCreateArticleButton()
    await articlePage.articleTitleNameField(fullTitle)
    await articlePage.clickOnDoneButton()
    await page.waitForTimeout(5000)
    await articlePage.verifyArticleTitle(fullTitle)
    await loginPage.enableAttachment()
    await page.waitForTimeout(6000)
    await loginPage.addAttachment()
  })

  test('Api testing', async ({ page }) => {
    const url = 'https://letcode.in/elements'; 

    await page.goto(url)

    const [response] = await Promise.all([
      page.waitForResponse(res=>
        res.status()==200
        &&
        res.url()=="https://api.github.com/users/ortonikc"
        &&
        res.body()
      ),
      page.fill("input[name='username']","ortonikc"),
      page.click("button")
    ])
    console.log(await response.json())

});