import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'

describe('<Todo />', () => {
  let component
  const todo = {
    id: 'id',
    text: 'exercise 14 part 12 fullstackopen',
    done: false
  }
  const deleteTodo = jest.fn()
  const completeTodo = jest.fn()

  component = render(
    <Todo
      todo={todo}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  )

  test('render', () => {
    const button = component.getByText('Set as done', { selector: 'button' })

    fireEvent.click(button)
    expect(completeTodo).toHaveBeenCalled()

    expect(component.container).toHaveTextContent('exercise 14 part 12 fullstackopen')
  })
})

