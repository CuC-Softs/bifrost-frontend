import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  RemoveCircle,
} from '@material-ui/icons';
import { HTMLProps } from 'react';

import { PresetLi } from './styles';

interface EntryProps extends HTMLProps<HTMLDivElement> {
  className: string;
}

const Entry: React.FC<EntryProps> = ({ className }) => {
  function setFocus(e: HTMLDivElement) {
    console.log(e.children[0].focus());
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
            <div className="component" onClick={e => setFocus(e.target)}>
              <textarea
                placeholder="Digite aqui"
                style={{ resize: 'none' }}
                name="text"
                id="text"
              />
            </div>
            <RemoveCircle className="remove" />
          </div>
        </PresetLi>
      </>
    );
  }
  if (className === 'image') {
    return (
      <>
        <PresetLi>
          <div className="text">
            <div className="buttons">
              <KeyboardArrowUp className="up" />
              <KeyboardArrowDown className="down" />
            </div>
            <div className="component" />
            <RemoveCircle className="remove" />
          </div>
        </PresetLi>
      </>
    );
  }
  if (className === 'video') {
    return (
      <>
        <PresetLi>
          <div className="text">
            <div className="buttons">
              <KeyboardArrowUp className="up" />
              <KeyboardArrowDown className="down" />
            </div>
            <div className="component" />
            <RemoveCircle className="remove" />
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
              <KeyboardArrowUp className="up" />
              <KeyboardArrowDown className="down" />
            </div>
            <div className="component" />
            <RemoveCircle className="remove" />
          </div>
        </PresetLi>
      </>
    );
  }
};

export default Entry;
