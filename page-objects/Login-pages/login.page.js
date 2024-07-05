import { expect } from "@playwright/test";

class LoginPage {

  constructor(page) {
    this.page = page;
    this.txtBox_username = page.locator('#logonIdentifier');
    this.txtBox_password = page.locator('#password');
    this.btn_Login = page.locator('button[type="submit"]');
    this.retain_session = page.locator("//a[@data-qtip='Retain Sessions & Sign In']")
    this.knowledge_icon = page.locator("//span[@id='button-1015-btnInnerEl']")
    
    
    this.portals = page.locator("li[id='nav-data_portals'] div[class='nav-text no-wrap']")
    this.verify_portalwindow = page.locator("h2[title='Portals']")
    this.add_portal = page.locator("#btn-tree-create")
    this.verify_createportal = page.locator("//h2[normalize-space()='Create Portal']")
    this.txtBox_portalname = page.locator("#in-portal-genaral-name")
    this.portal_topics = page.locator("//a[contains(text(),'Topics')]")
    this.addtopics_portals = page.locator("//button[@id='btn-portal-topics-selected-topics']//span[contains(@class,'icon-add')]")
    this.selecttopic = page.locator('div[class="text-ellipsis  vertical-center-using-flex "]').nth(1)
    this.portal_rightarrow = page.locator("svg[kind='right-arrow']")
    this.btn_portalDone = page.locator("//button[@id='btn-tree-to-list-slosh-modal-ok']")
    this.btn_SavePortal = page.locator("#btn-portalForm-Save")
    this.btn_ClosePortal = page.locator("#btn--cancel")
    this.btn_YesPortal = page.locator("#btn-confirmation-modal-yes")
    this.summary_menu = page.locator("#ic-summary-menu")
    this.attachment_toggleButton = page.locator('#togg-summary-side-nav-9');
    this.verify_AttachmentProperties = page.locator("h4[aria-label='Attachmentsregion']")
    this.edit_attachment = page.getByRole('button', { name: 'Edit', exact: true })
    this.verify_attachmentwindow = page.locator('[title="Attachments"]')
    this.uploadfile = page.locator("//input[@type='file']")
    this.btn_upload = page.locator("//button[@id='btn-drag-drop-file-upload-submit']")
    this.verify_attachment = page.locator("td[id='attachment_modal-cell-2-0'] div[class='text-ellipsis']")
    this.close_attachment = page.locator("//button[@id='btn-attachments-modal-cancel']")
    this.btn_publish = page.locator("//button[@id='btn-article-content- publish']")
    this.btn_publishDone = page.locator("//button[@id='btn-publish-summary-modal-ok']")
    this.attachmentVerify = page.locator("//div[@class='padding-top-8']//div[@class='d-flex']")

  }

  async navigate(url: String) {
    await this.page.goto(url);
  }

  async loginToApplication(username, password) {
    await this.txtBox_username.fill(username);
    await this.txtBox_password.fill(password);
    await this.btn_Login.click();
  }

  async clickOnRetainSession() {
    try {
      await this.retain_session.click({ timeout: 0 });
      console.log('Element is visible and clicked');
    } catch (error) {
      console.error('Element is not visible or an error occurred:', error);
    }
  }

  async clickOnKnowledgeIcon() {
    await this.knowledge_icon.click()
  }

  async clickOnPortals() {
    await this.portals.click();
    await expect(this.verify_portalwindow).toHaveText('Portals');
  }

  async clickOnAddPortal() {
    await this.add_portal.click()
    await expect(this.verify_createportal).toHaveText('Create Portal');
  }

  async createPortal(portalName) {
    await this.txtBox_portalname.fill(portalName)
    await this.portal_topics.click()
    await this.addtopics_portals.click()
    await this.selecttopic.click()
    await this.portal_rightarrow.click()
    await this.btn_portalDone.click()
    await this.btn_SavePortal.click()
    await this.btn_ClosePortal.click()
    await this.btn_YesPortal.click()
  }

  async enableAttachment() {
    await this.summary_menu.click()
    try {
      // Attempt to click the toggle button
      await this.attachment_toggleButton.click();
      console.log('Toggle button is now enabled.');
    } catch (error) {
      console.log('Toggle button was disabled. Attempting to enable it.');
      // Assuming the button is disabled using aria-disabled attribute
      await attachment_toggleButton.evaluate(button => button.removeAttribute('aria-disabled'));
      await attachment_toggleButton.click();
      console.log('Toggle button has been enabled.');
    }
    await expect(this.verify_AttachmentProperties).toHaveText('Attachments');
  }

  async addAttachment() {
    await this.verify_AttachmentProperties.click()
    // await this.edit_attachment.hover();
    await this.edit_attachment.click();
    await expect(this.verify_attachmentwindow).toHaveText('Attachments');
    await this.uploadfile.setInputFiles('testdata/uploadFiles/egain.pdf'); // Ensure the file path is correct
    await this.btn_upload.click()
    await this.verify_attachment.isVisible()
    await this.close_attachment.click()
  }

  async clickOnPublishButton() {
    await this.btn_publish.click()
    await this.btn_publishDone.click()
  }

  async verifyAttachment() {
    await this.attachmentVerify.isVisible()
  }
}

export default { LoginPage };

