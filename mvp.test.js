const { screen, fireEvent, within } = require('@testing-library/dom')
require('@testing-library/jest-dom')
const { moduleProject1 } = require('./frontend/index')

const waitForOptions = { timeout: 150 } // so Codegrade does not take forever

jest.useFakeTimers()

beforeEach(() => {
  document.querySelector('body').innerHTML = `
    <header>
      <h1>Sprint 5 Module 1 Project</h1>
      <h2>Widgets</h2>
      <p class="info">Building DOM programmatically...</p>
    </header>
    <section>
      <div class="widget quoteoftheday">
        <h3>Quote of the Day</h3>
      </div>
      <div class="widget corporatespeak">
        <h3>Corporate Speak</h3>
      </div>
      <div class="widget countdown">
        <h3>Countdown</h3>
      </div>
      <div class="widget friends">
        <h3>Friends</h3>
      </div>
    </section>
    <footer></footer>`
  moduleProject1()
})

describe('Sprint 5 Module', () => {
  describe('Task 1 - widget class name', () => {
    test('👉 [1] All 4 widgets have a "widget" class name', () => {
      expect(document.querySelectorAll('section .widget')).toHaveLength(4)
    })
  })
  describe('Task 2 - Quote of the Day widget', () => {
    describe('The best thing about a boolean...', () => {
      beforeAll(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.6)
      })
      afterAll(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })
      test('👉 [2] The quote is correctly rendered', () => {
        screen.getAllByText('The best thing about a boolean is even if you are wrong, you are only off by a bit.')
      })
      test('👉 [3] The author and date are correctly rendered', () => {
        screen.getAllByText('Anonymous in an unknown date')
      })
    })
    describe('The most damaging phrase...', () => {
      beforeAll(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.4)
      })
      afterAll(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })
      test('👉 [4] The quote is correctly rendered', () => {
        screen.getAllByText("The most damaging phrase in the language is: 'It's always been done that way.'")
      })
      test('👉 [5] The author and date are correctly rendered', () => {
        screen.getAllByText('Grace Hopper in 1978')
      })
    })
  })
  describe('Task 3 - Corporate Speak', () => {
    beforeAll(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.9)
    })
    afterAll(() => {
      jest.spyOn(global.Math, 'random').mockRestore()
    })
    test('👉 [6] Corporate mumbo-jumbo is correctly rendered', () => {
      screen.getByText('We need to evolve our mindshare agilely in order to evolve our mindshare agilely.')
    })
  })

  describe('Task 4 - Countdown Widget', () => {
    test('👉 [7] Counts from "T-minus 5..." to "Liftoff! 🚀"', () => {
      screen.getByText('Countdown')
      screen.getByText('T-minus 5...')
      jest.advanceTimersByTime(1000)
      screen.getByText('T-minus 4...')
      jest.advanceTimersByTime(1000)
      screen.getByText('T-minus 3...')
      jest.advanceTimersByTime(1000)
      screen.getByText('T-minus 2...')
      jest.advanceTimersByTime(1000)
      screen.getByText('T-minus 1...')
      jest.advanceTimersByTime(1000)
      screen.getByText('Liftoff! 🚀')
    })
  })
  describe('Task 5 - Friends widget', () => {
    describe('Kimberly Ng', () => {
      beforeAll(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.6)
      })
      afterAll(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })
      test('👉 [2] Kimberly Ng is correctly rendered', () => {
        screen.getAllByText('Kimberly Ng was born in 1987 and is friends with Samantha Singh.')
      })
    })
    describe('William Brown', () => {
      beforeAll(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.8)
      })
      afterAll(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })
      test('👉 [2] William Brown is correctly rendered', () => {
        screen.getAllByText('William Brown was born in 1997 and is friends with Jessica Taylor, Maria Rodriguez and Kimberly Ng.')
      })
    })
    describe('Luis Gonzalez', () => {
      beforeAll(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.67)
      })
      afterAll(() => {
        jest.spyOn(global.Math, 'random').mockRestore()
      })
      test('👉 [2] Luis Gonzalez is correctly rendered', () => {
        screen.getAllByText('Luis Gonzalez was born in 1990 and has no friends.')
      })
    })
  })
  describe('Task 6 - Tabbing through widgets', () => {


  })
})
