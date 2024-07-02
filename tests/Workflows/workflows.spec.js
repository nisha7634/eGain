import { test, expect } from "@playwright/test";
const data = require("../../testdata/login.json")
const { LoginPage } = require('../../page-objects/login-pages/login.page').default;
const { WorkflowPage } = require('../../page-objects/Workflows/workflows.page').default;
const { ArticlePage } = require('../../page-objects/Articles/article.page').default;


test('Verify that author should be able to apply workflow on folder.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const workflowsPage = new WorkflowPage(page);
    const articlePage = new ArticlePage(page);
    await loginPage.navigate();
    await loginPage.loginToApplication(data.validUser1.username, data.validUser1.password);
    await loginPage.clickOnRetainSession()
    await loginPage.clickOnKnowledgeIcon()
    await workflowsPage.ClickOnWorkflows();
    await workflowsPage.ClickOnManageStages();
    await workflowsPage.verifyManageStageWindowShouldBeVisible();
    await workflowsPage.AddNewStageNames();
    await workflowsPage.verifyStageIsAdded();
    await workflowsPage.AddNewStageNames();
    await workflowsPage.verifyStageIsAdded();
    await workflowsPage.ClickOnCloseTheManageStages();
    // page.pause();
    await workflowsPage.AddWorkflows(data.validUser1.workflowType);
    await workflowsPage.ClickOnStages();
    await workflowsPage.AddTheStages();
    await workflowsPage.verifyStageShouldGetAdded();
    await workflowsPage.AddTheStages();
    await workflowsPage.verifyStageShouldGetAdded();
    await workflowsPage.ClickOnSave();
    await articlePage.clickOnArticle();
    await articlePage.clickOnKnowledgeBuildingBlocks();
    await articlePage.clickOnKebeb();
    await articlePage.verifyEditFolderWindowShouldBeDisplayed();
    await articlePage.clickOnWorkflow(data.validUser1.articleType,data.validUser1.workflow);
    await articlePage.AddTheWorkflow();
    // await articlePage.verifyWorkflowIsApplied(data.validUser1.articleType);
});