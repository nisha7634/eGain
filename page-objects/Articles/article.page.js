import { expect } from "@playwright/test";
class ArticlePage {

  constructor(page) {
    this.page = page;
    this.btn_Article = page.locator("(//div[.='Articles'])[2]");
    this.opt_KnowledgeBuildingBlocks = page.locator("(//div[.='Knowledge Building Blocks'])[2]");
    this.btn_Kebeb = page.locator('(//div[@class="tree-context-menu-toggle"])[3]');
    this.opt_View = page.locator("(//span[.='View'])[3]");
    this.btn_Workflow = page.locator("//button[.='Workflows']");
    this.ddl_ArticleType = page.locator("#ddl-new-workflowassociations-modal-department-article-types");
    this.ddl_Workflow = page.locator("#ddl-new-workflowassociations-modal-department-article-workflows");
    this.btn_Done = page.locator("//button[.='Done']");
    this.txt_CreateWorkflowAssociations = page.locator("//span[.='Create Workflow Associations']");
    this.txt_EditFolder = page.locator("//h2[.='Edit Folder: Knowledge Building Blocks']");
    this.sendToBtn = page.locator("//button[@id='btn-article-content-dropdownMenuLink']")
    this.select_Stage = page.locator("//a[@id='ic-article-content-front-0']")
    this.workflowTab = page.locator("//div[@id='article-workflow-stage']")
    this.notificationBtn = page.locator("//a[@id='ic-header-messages']")
    this.article = page.locator("//div[contains(text(),'Articles')]")
    this.select_folderF1 = page.locator("//div[contains(text(),'f1')]")
    this.create_article = page.locator("#ic-create-nav-article-header")
    this.article_titlefield = page.locator("//input[@id='in-add-article-modal-versions.version.0.name']")
    this.btn_Done = page.locator("//button[@id='btn-add-article-modal-ok']")
    this.ui_title = page.locator(".article-name-component_input-wrap")
    this.close_icon = page.locator("//div[@class='whats-new-modal__close-button d-focus-inset']//*[name()='svg']")

  }
  /**
    * This function is used to Clcik on Article
    */
  async clickOnArticle() {
    await this.btn_Article.click();
  }

  /**
  * This function is used to Clcik on Knowledge Building Blocks
  */
  async clickOnKnowledgeBuildingBlocks() {
    await this.opt_KnowledgeBuildingBlocks.click();
  }

  /**
  * This function is used to Clcik on Menu kebab
  */
  async clickOnKebeb() {
    await this.btn_Kebeb.click();
    await this.opt_View.click();
  }

  /**
  * This function is used to Clcik on Workflow
  */
  async clickOnWorkflow() {
    await this.btn_Workflow.click();
  }

  /**
  * This function is used to Add workflow and verify the Create Workflow Association Window Should Get Opened
  */
  async AddTheWorkflow(articleType, workflow) {
    await this.page.getByLabel('Create new button').click();
    await this.verifyCreateWorkflowAssociationWindowShouldGetOpened();
    await this.ddl_ArticleType.click();
    await this.page.locator("//span[normalize-space()='" + articleType + "']").click();
    await this.ddl_Workflow.click();
    await this.page.locator("//span[normalize-space()='" + workflow + "']").click();
    await this.btn_Done.last().click();
    await await this.btn_Done.first().click();
  }

  /**
 * This function is used to  verify the Workflow should applied
 */
  async verifyWorkflowShouldApplied(articleType) {
    const isApplied = await this.page.locator("//td[normalize-space()='" + articleType + "']").isVisible();
    expect(isApplied).toBeTruthy();
  }

  /**
 * This function is used to verify the Create Workflow Association Window Should Get Opened
 */
  async verifyCreateWorkflowAssociationWindowShouldGetOpened() {
    const isGetOpened = await this.txt_CreateWorkflowAssociations.isVisible();
    expect(isGetOpened).toBeTruthy();
  }

  /**
 * This function is used to Averify theedit folder Window Should Get displayed
 */
  async verifyEditFolderWindowShouldBeDisplayed() {
    const isDisplayed = await this.txt_EditFolder.isVisible();
    // expect(isDisplayed).toBeTruthy();
  }

  //


  async clickSendTo() {
    await this.sendToBtn.click()
  }

  async getStageName() {
    await this.select_Stage.textContent();
  }

  async selectStage() {
    await this.select_Stage.click()
  }

  async getWorkflowStageName() {
    await this.workflowTab.textContent();
  }

  async verifyStagesAndClickNotification() {
    const stageName = await this.getStageName();
    await this.selectStage();
    const workflowStageName = await this.getWorkflowStageName();
    if (stageName === workflowStageName) {
      console.log('The stage names are the same.');
    } else {
      console.log('The stage names are different.');
    }
    await this.notificationBtn.click();
  }

  async clickOnArticle() {
    await this.article.click()
  }

  async selectFolderF1() {
    await this.select_folderF1.click()
  }

  async clickOnCreateArticleButton() {
    await this.create_article.click()
  }


  async articleTitleNameField(fullTitle) {
    try {
      //   const randomNumber = Math.floor(Math.random() * 9999);
      //   const fullTitle = `${ArticleTitle}${randomNumber}`;
      console.log(`Generated Title: ${fullTitle}`);

      await this.article_titlefield.fill(fullTitle)

    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  async clickOnDoneButton() {
    await this.btn_Done.click()
  }

  async clickOnCloseIcon() {
    try {
      await this.close_icon.click({ timeout: 0 });
      console.log('Element is visible and clicked');
    } catch (error) {
      console.error('Element is not visible or an error occurred:', error);
    }
  }

  async verifyArticleTitle(expectedValue) {
    let act_title = await this.ui_title.textContent()
    console.log(act_title);
    expect(act_title).toBe(expectedValue)
  }
}
export default { ArticlePage };
