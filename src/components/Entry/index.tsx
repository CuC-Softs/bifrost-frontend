/* eslint-disable no-param-reassign */
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  RemoveCircle,
} from '@material-ui/icons';
import { HTMLProps } from 'react';

import { PresetLi } from './styles';

interface EntryProps extends HTMLProps<HTMLDivElement> {
  className: string;
  src?: string;
}

const Entry: React.FC<EntryProps> = ({ className, src }) => {
  function setFocus(element: HTMLDivElement) {
    element.children[0].focus();
  }

  function autoGrow(element: HTMLTextAreaElement) {
    element.style.height = '0.2rem';
    element.style.height = `${element.scrollHeight}px`;
  }

  if (className === 'text') {
    return (
      <>
        <PresetLi>
          <div className={className}>
            <div className="buttons">
              <button type="button" className="upDownButton">
                <KeyboardArrowUp className="up" />
              </button>
              <button type="button" className="upDownButton">
                <KeyboardArrowDown className="down" />
              </button>
            </div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div className="component" onClick={e => setFocus(e.target)}>
              <textarea
                placeholder="Digite aqui"
                maxLength={360}
                name="text"
                id="text"
                onKeyPress={e => autoGrow(e.target)}
                onKeyUp={e => autoGrow(e.target)}
              />
            </div>
            <button type="button" className="removeButton">
              <RemoveCircle className="remove" />
            </button>
          </div>
        </PresetLi>
      </>
    );
  }
  if (className === 'image') {
    return (
      <>
        <PresetLi>
          <div className={className}>
            <div className="buttons">
              <button type="button" className="upDownButton">
                <KeyboardArrowUp className="up" />
              </button>
              <button type="button" className="upDownButton">
                <KeyboardArrowDown className="down" />
              </button>
            </div>
            <div className="component">
              <div className="imgLocation">
                <button type="button">Adicionar localização</button>
              </div>
              <img src={src} alt="entry_image" className="entryImage" />
            </div>

            <button type="button" className="removeButton">
              <RemoveCircle className="remove" />
            </button>
          </div>
        </PresetLi>
      </>
    );
  }
  if (className === 'video') {
    return (
      <>
        <PresetLi>
          <div className={className}>
            <div className="buttons">
              <button type="button" className="upDownButton">
                <KeyboardArrowUp className="up" />
              </button>
              <button type="button" className="upDownButton">
                <KeyboardArrowDown className="down" />
              </button>
            </div>
            <div className="component">
              <div className="imgLocation">
                <button type="button">Adicionar localização</button>
              </div>
              <img src={src} alt="entry_image" className="entryImage" />
            </div>

            <button type="button" className="removeButton">
              <RemoveCircle className="remove" />
            </button>
          </div>
        </PresetLi>
      </>
    );
  }
  if (className === 'location') {
    return (
      <>
        <PresetLi>
          <div className="text">
            <div className="buttons">
              <button type="button" className="upDownButton">
                <KeyboardArrowUp className="up" />
              </button>
              <button type="button" className="upDownButton">
                <KeyboardArrowDown className="down" />
              </button>
            </div>
            <div className="component" />

            <button type="button" className="removeButton">
              <RemoveCircle className="remove" />
            </button>
          </div>
        </PresetLi>
      </>
    );
  }
};

export default Entry;
