import { expect } from "@playwright/test";
class WorkflowPage {

    constructor(page) {
        this.page = page;
        this.btn_Workflows = page.locator("(//div[.='Workflows'])[2]");
        this.btn_Add = page.locator("//button[@id='btn-tree-create']");
        this.txtBox_Name = page.locator("//input[@id='in-workflow-general-name']");
        this.btn_ManageStages = page.locator("//button[.='Manage Stages']");
        this.btn_AddManageStages = page.locator("#btn-manage-stages-modal-create");
        this.txtBox_StageName = page.locator("#in-add-edit-stage-modal-name");
        this.btn_Save = page.locator("//button[.='Save']");
        this.btn_Close = page.locator("//button[.='Close']");
        this.ddl_WorkflowType = page.locator("#ddl-workflow-general-workflowType");
        this.btn_yes = page.locator("#btn-confirmation-modal-yes");
        this.btn_Stages = page.locator("//a[normalize-space()='Stages']");
        this.ddl_NewStagesName = page.locator("#ddl-stage-modal-newStageID");
        this.ddl_NewStagesNameOption = page.locator('//div[@class="dropdown-item-content"]').last();
        this.btn_Done = page.locator("#btn-stage-modal-ok");
        this.txt_ManageStages = page.locator('//span[@title="Manage Stages"]');
        this.txt_CreateWorkflow = page.locator("//h2[.='Create Workflow']");
        this.txt_AddNewStage = page.locator('//span[@title="Add New Stage"]');



    }

    /**
 * This function is used to random string generation
 */
    async RandomStringGeneration() {
        const randomString = `${Math.random().toString().slice(2, 6)}`;
        const expectedStageName = `${'vtest'}${randomString}`;
        return expectedStageName;
    }

    /**
    * This function is used to click on workflow
    */
    async ClickOnWorkflows() {
        await this.page.waitForLoadState('networkidle');
        await this.btn_Workflows.click();
        // await this.page.getByRole('dialog').locator('path').click();
    }

    /**
   * This function is used to click on ManageStages
   */
    async ClickOnManageStages() {
        await this.btn_ManageStages.click();
        let stage = this.btn_ManageStages.textContent();
        console.log(stage)
    }

    /**
  * This function is used to Add new stages names
  */
    async AddNewStageNames() {
        await this.btn_AddManageStages.click();
        let RandomName = await this.RandomStringGeneration();
        await this.txtBox_StageName.fill(RandomName);
        await this.btn_Save.click();
    }

    /**
      * This function is used to click on close the manage stages
      */
    async ClickOnCloseTheManageStages() {
        await this.btn_Close.click();
    }

    /**
  * This function is used to Add workflow
  */
    async AddWorkflows(WorkflowType) {
        await this.page.waitForLoadState('networkidle');
        await this.btn_Add.click();
        await this.verifyCreateWorkflowWindowShouldBeVisible();
        let RandomName = await this.RandomStringGeneration();
        await this.txtBox_Name.fill(RandomName);
        await this.ddl_WorkflowType.click();
        await this.page.locator("//span[normalize-space()='" + WorkflowType + "']").click();
        await this.btn_yes.click();
    }

    /**
  * This function is used to click on stages
  */
    async ClickOnStages() {
        await this.btn_Stages.click();
    }

    /**
  * This function is used to Add the Stages
  */
    async AddTheStages() {
        await this.page.getByLabel('Create new button').click();
        await this.verifyAddNewStageWindowShouldBeVisible();
        await this.ddl_NewStagesName.click();
        await this.ddl_NewStagesNameOption.click();
        await this.btn_Done.click();
    }

    /**
  * This function is used to click on Save
  */
    async ClickOnSave() {
        await this.btn_Save.click();
    }

    /**
  * This function is used to verify workflow is added 
  */
    async verifyWorkflowIsAdded(workflow) {
        const isAdded = await this.page.locator("//td[normalize-space()='" + workflow + "']").isVisible();
        expect(isAdded).toBeTruthy();
    }

    /**
  * This function is used to verify manage stage window should be visible
  */
    async verifyManageStageWindowShouldBeVisible() {
        const isDisplayed = await this.txt_ManageStages.isVisible();
        //const text = await btn_ManageStages.textContent();
        // Verify the text using expect assertion
        expect("Manage Stages").toBe('Manage Stages2');
        
    }

    /**
    * This function is used to verify stage is Added 
    */
    async verifyStageIsAdded() {
        const isAdded = await this.page.locator('//div[@class="text-ellipsis "]/span').last().isVisible();
        expect(isAdded).toBeFalsy
    }

    /**
    * This function is used to verify create workflow window should be visible
    */
    async verifyCreateWorkflowWindowShouldBeVisible() {
        const isDisplayed = await this.txt_CreateWorkflow.isVisible();
        expect(isDisplayed).toBeTruthy();
    }

    /**
    * This function is used to verify Add new stage window should be visible
    */
    async verifyAddNewStageWindowShouldBeVisible() {
        const isDisplayed = await this.txt_AddNewStage.isVisible();
        expect(isDisplayed).toBeTruthy();
    }

    /**
        * This function is used to verify stage should get added
        */
    async verifyStageShouldGetAdded() {
        const isDisplayed = await this.page.locator('//div[@class="text-ellipsis "]').first().isVisible();
        expect(isDisplayed).toBeTruthy();
    }


}
export default { WorkflowPage };