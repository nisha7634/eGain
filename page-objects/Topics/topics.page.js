import { expect } from "@playwright/test";
class TopicPage {

  constructor(page) {
    this.page = page;
    this.topic = page.locator("//li[@id='nav-data_topics']")
    this.create_topic = page.locator("//span[@aria-label='Create new button']")
    this.verify_createtopic = page.locator("//h2[normalize-space()='Create Topic']")
    this.txtBox_topicname = page.locator('#in-topics-general-name');
    this.btn_Save = page.locator('#btn-topicForm-Save');
    this.topic_articles = page.getByRole('link', { name: 'Articles' })
    this.btn_Add = page.locator("button[id='btn-topics-selected-articles'] span[class='sr-only']")
    this.folderLocator = page.locator('.sidebar-content.overflow-auto li').filter({ hasText: /^f1$/ });
    this.search_article = page.locator("#in-generic-slouch-search-bar")
    this.searched_article = page.locator('[class="text-ellipsis"]')
    this.add_arrow = page.locator('#btn-generic-slosh-component-with-available-section-add')
    this.btn_topicDone = page.locator("#btn-article-selector-modal-ok")
    this.verify_added_article = page.locator("//td[@id='topics-selected-articles-Cell-0-1']")
    this.btn_ClosePortal = page.locator("#btn--cancel")

  }
  async clickOnTopic() {
    await this.topic.click()
  }

  async clickOnAddTopic() {
    await this.create_topic.click()
  }

  async verifyCreateTopiWindow() {
    let act_text = await this.verify_createtopic.textContent()
    console.log(act_text);
    expect(act_text).toBe("Create Topic")
  }

  async topicNameField(topicName) {
    try {
      //   const randomNumber = Math.floor(Math.random() * 9999);
      //   const fullTitle = `${ArticleTitle}${randomNumber}`;
      console.log(`Generated Title: ${topicName}`);

      await this.txtBox_topicname.fill(topicName)

    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  async clickOnSaveButton() {
    await this.btn_Save.click()
  }

  async clickOnArticlesInTopic() {
    await this.topic_articles.click()
  }

  async clickOnAddButton() {
    await this.btn_Add.click()
  }

  async selectF1Article() {
    await this.folderLocator.click()
  }

  async searchandSelectArticleInTopic(fullTitle) {
    await this.search_article.fill(fullTitle)
    await this.search_article.press('Enter');
    await this.searched_article.click()
    await this.add_arrow.click()
    await this.btn_topicDone.click()
    const actual_addedArtile = await this.verify_added_article.textContent()
    expect(actual_addedArtile).toBe(fullTitle)
    await this.btn_Save.click()
    await this.btn_ClosePortal.click()
  }

}
export default { TopicPage };
