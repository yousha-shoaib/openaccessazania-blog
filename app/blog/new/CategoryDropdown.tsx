import React, { useState } from 'react'

type SelectOption = {
  id: number;
  name: string;
}

type Props = {
  list: SelectOption[];
  selected: number | null;
  setSelected: (select: number) => void;
}

const CategoryDropdown = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(prevOpen => !prevOpen);
  }

  const selectOption = (id: number) => {
    props.setSelected(id);
    setOpen(false);
  }

  const currSelection = props.list.find(item => item.id === props.selected) || { name: 'Select a category' };

  return (
    <div className='my-4 w-fit-content'><button type='button' onClick={toggleOpen} className='p-4 w-[360px] text-white bg-[#E87A21] border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)]'>{currSelection.name}</button>
      {
        open ? (
          <div className='absolute mt-2 bg-white rounded-md border neo-shadow'>
            {props.list.map((item) => (
              <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer" key={item.id} onClick={() => selectOption(item.id)}>{item.name}</div>
            ))}
          </div>
        ) : null

      }
    </div>
  )
}

export default CategoryDropdown