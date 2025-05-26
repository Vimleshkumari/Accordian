import { useState } from 'react';

export default function Accordion({ itemsList }) {
  const [isOpen, setIsOpen] = useState(null);
  const [currentOpen, setcurrentOpen] = useState(null);

  const handleClick = (ind) => {
    setcurrentOpen(ind);
    setIsOpen(isOpen ? !isOpen : true);
    if (isOpen && currentOpen === ind) {
      setIsOpen(false);
      setcurrentOpen(null);
    } else if (isOpen && currentOpen !== ind) {
      setIsOpen(true);
      setcurrentOpen(ind);
    }
  };
  return (
    <div className="accordion">
      {itemsList.length > 0
        ? itemsList.map((item, ind) => {
            return (
              <div
                key={ind}
                className="accordion-item"
              >
                <p
                  onClick={() => handleClick(ind)}
                  className="accordion-title"
                >
                  {item.title}
                </p>
                {isOpen && currentOpen === ind ? (
                  <p className="accordion-content">{item.content}</p>
                ) : (
                  ''
                )}
              </div>
            );
          })
        : 'No items available'}
    </div>
  );
}
