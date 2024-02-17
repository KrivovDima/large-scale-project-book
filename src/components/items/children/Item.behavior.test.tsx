import { ItemInterface } from "@/models/items/Item.interface"
import { fireEvent, render } from "@testing-library/react"
import { Item } from "./Item.component"

describe('Item.component: behavior', () => {
    it('click event invokes onItemSelect handler as expected', () => {
        const testId = 'unit-test-item'
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1', 
            selected: false,
        }
        const onItemSelect = vitest.fn()

        const { container } = render(<Item testId={testId} onItemSelect={onItemSelect} model={model} />)
        const liElement = container.firstChild as HTMLElement

        fireEvent.click(liElement)

        expect(onItemSelect).toHaveBeenCalledTimes(1)
    })
})