import { ItemInterface } from '../../../models/items/Item.interface'

type Props = {
    testId: string
    model: ItemInterface
    onItemSelect: (item: ItemInterface) => void
}

export const Item = ({model, onItemSelect,testId}: Props) => {
    const handleItemClick = (item: ItemInterface) => {
        onItemSelect(item)
    }
    
    const getClassName = () => {
        let className = 'item'

        if (model.selected) {
            className += ' selected'
        }

        return className
    }

  return (
    <li  data-testid={testId} className={getClassName()} onClick={() => handleItemClick(model)}>
        <div className='selected-indicator'>*</div>
        <div className='name'>{model.name}</div>
    </li>
  )
}