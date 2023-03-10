import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:5500/public')
})

afterAll(async () => {
    driver.quit()
})

test('User can click to add #player-duo and it displays', async () => {
    const addToDuo = await driver.findElement(By.id('see-all')).click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElement(By.id('all-bots'))
    const displayed =  await playerDuo.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})

test('Caption appears on loading', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})

test('User can click and the choices div shows', async () => {
    const draw = await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed =  await choices.isDisplayed()
    expect(displayed).toBe(true)

})