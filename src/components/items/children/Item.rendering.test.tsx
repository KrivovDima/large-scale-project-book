import { ItemInterface } from "@/models/items/Item.interface";
import { render, screen } from "@testing-library/react";
import { Item } from "./Item.component";

describe('Item.component rendering', () => {
    it('renders an Item text correctly', () => {
        const testId = 'unit-test-item';
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false,
        }      

        render(<Item testId={testId} onItemSelect={() => {}} model={model} />)

        const liElement = screen.getByTestId(testId)

        expect(liElement).not.toBeNull()

        const children = liElement.children
        
        expect(children).toHaveLength(2)
        expect(children.item(1)?.innerHTML).toContain('Unit test item 1')
    })

    it('renders an Item indicator correctly', () => {
        const testId = 'unit-test-item';
        const model: ItemInterface = {
            id: 2,
            name: 'Unit test item 2',
            selected: false,
        } 

        render(<Item testId={testId} onItemSelect={() => {}} model={model} />)

        const liElement = screen.getByTestId(testId)

        expect(liElement).not.toBeNull()

        const children = liElement.children

        expect(children).toHaveLength(2)
        expect(children.item(0)?.innerHTML).toEqual('*')
    })

    it('has expected css class when selected is true', () => {
        const testId = 'unit-test-item';
        const model: ItemInterface = {
            id: 3,
            name: 'Unit test item 3',
            selected: true,
        } 

        render(<Item testId={testId} onItemSelect={() => {}} model={model} />)

        const liElement = screen.getByTestId(testId)

        expect(liElement).not.toBeNull()
        expect(liElement.className).toContain('selected')
    })

    it('has expected css class when selected is false', () => {
        const testId = 'unit-test-item';
        const model: ItemInterface = {
            id: 4,
            name: 'Unit test item 4',
            selected: false,
        } 

        render(<Item testId={testId} onItemSelect={() => {}} model={model} />)

        const liElement = screen.getByTestId(testId)

        expect(liElement).not.toBeNull()
        expect(liElement.className).not.toContain('selected')
    })
})