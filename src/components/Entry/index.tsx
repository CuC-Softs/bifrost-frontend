/* eslint-disable no-param-reassign */
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  RemoveCircle,
  // NavigateNext,
  // NavigateBefore,
  PlayArrow,
  Pause,
  VolumeOff,
  VolumeUp,
  VolumeDown,
  VolumeMute,
  // Search,
} from '@material-ui/icons';

import React, { HTMLAttributes, HTMLProps, useEffect, useState } from 'react';

// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from '@react-google-maps/api';

import { PresetLi, SearchBarDiv, SearchBarInput } from './styles';

interface EntryProps extends HTMLProps<HTMLDivElement> {
  className: string;
  src?: string;
  text?: string;
  entryId: number;
  // id: string;
}

// const libraries = ['places'];

// const mapContainerStyle = {
//   width: '100%',
//   flex: '1',
//   display: 'flex',
//   'flex-direction': 'column',
//   background: '#c5c5c5',
//   padding: '0.8rem',
//   'justify-content': 'space-between',
// };

// const center = {
//   lat: 0,
//   lng: 0,
// };

const Entry: React.FC<EntryProps> = ({
  className,
  src,
  value,
  entryId,
  // id,
}) => {
  const [isPaused, setIsPaused] = useState(true);
  const [isMute, setIsMute] = useState(false);
  const [volume, setVolume] = useState(50);
  // eslint-disable-next-line prettier/prettier
  const [volumeIcon, setVolumeIcon] = useState(<VolumeDown />);
  // const [locSelector, setLocSelector] = useState(0);
  // const [location, setLocation] = useState('');

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyAclFGKqOIMvkBmRHFQ792FeOe3x1eA1b4',
  //   libraries,
  // });

  // useEffect(() => {
  //   if (locSelector === 0) {
  //     document.querySelector('#mapSel').className = 'activeSelector';
  //     document.querySelector('#locImgSel').className = 'normalSel';
  //   }

  //   if (locSelector === 1) {
  //     document.querySelector('#mapSel').className = 'normalSel';
  //     document.querySelector('#locImgSel').className = 'activeSelector';
  //   }
  // }, [locSelector]);

  useEffect(() => {
    if (!isMute && volume > 50) {
      setVolumeIcon(<VolumeUp />);
    } else if (!isMute && volume <= 50 && volume > 3) {
      setVolumeIcon(<VolumeDown />);
    } else if (!isMute && volume <= 3) {
      setVolumeIcon(<VolumeMute />);
    } else if (isMute) {
      setVolumeIcon(<VolumeOff />);
    }
  }, [volume, isMute]);

  function toggleMute() {
    if (isMute) {
      setIsMute(false);
      document.querySelector<HTMLVideoElement>('.entryVideo').muted = false;
    } else {
      setIsMute(true);
      document.querySelector<HTMLVideoElement>('.entryVideo').muted = true;
    }
  }

  function test() {
    const ul = document.getElementById('entriesList');

    const a = ul.childNodes.length - 1;

    console.log(ul.childNodes[a].src);
  }

  function setFocus(element: HTMLDivElement) {
    element.children[0].focus();
    test();
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
                defaultValue={value || ''}
                id="text"
                onKeyPress={e => autoGrow(e.target)}
                onKeyUp={e => autoGrow(e.target)}
                // onBlur={}
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
              {/* <div className="imgLocation">
                <button type="button">Adicionar localização</button>
              </div> */}
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
              {/* <div className="videoLocation">
                <button type="button">Adicionar localização</button>
              </div> */}
              {/* Lembrar disso no futuro, por razões de acessibilidade */}
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src={src}
                poster="http://dingyue.ws.126.net/4PneSyuqk1BGQoK5bEEy2RqiqL=aezmsq8VwuzSoDvpV61558061116533.gif"
                // poster="https://wallpaperaccess.com/full/2204414.jpg"
                className="entryVideo"
                onTimeUpdate={e => {
                  document.querySelector<HTMLDivElement>(
                    '.greenJuice',
                  ).style.width = `${
                    (e.target.currentTime / e.target.duration) * 100
                  }%`;
                }}
                onEnded={e => {
                  document.querySelector<HTMLDivElement>(
                    '.greenJuice',
                  ).style.width = '0';
                  setIsPaused(true);
                }}
              />
              <div className="videoControls">
                <div className="greenBar">
                  <div className="greenJuice" />
                </div>
                <div className="videoButtons">
                  <button
                    type="button"
                    id="playPause"
                    onClick={e => {
                      if (!isPaused) {
                        setIsPaused(true);
                        document
                          .querySelector<HTMLVideoElement>('.entryVideo')
                          .pause();
                      } else {
                        setIsPaused(false);
                        document
                          .querySelector<HTMLVideoElement>('.entryVideo')
                          .play();
                      }
                    }}
                  >
                    {!isPaused ? <Pause /> : <PlayArrow />}
                  </button>
                  <div className="volumeSlider">
                    <button
                      type="button"
                      className="volumeButton"
                      onClick={e => toggleMute()}
                    >
                      {volumeIcon}
                    </button>
                    <div className="sliderPadding">
                      <input
                        type="range"
                        name="volume"
                        className="volume"
                        value={volume}
                        max={100}
                        onInput={e => {
                          document.querySelector<HTMLVideoElement>(
                            '.entryVideo',
                          ).volume = e.target.value / 100;
                          setVolume(
                            document.querySelector<HTMLVideoElement>(
                              '.entryVideo',
                            ).volume * 100,
                          );
                          console.log(volume);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="removeButton">
              <RemoveCircle className="remove" />
            </button>
          </div>
        </PresetLi>
      </>
    );
  }
  // if (className === 'location') {
  //   return (
  //     <>
  //       <PresetLi>
  //         <div className="text">
  //           <div className="buttons">
  //             <button type="button" className="upDownButton">
  //               <KeyboardArrowUp className="up" />
  //             </button>
  //             <button type="button" className="upDownButton">
  //               <KeyboardArrowDown className="down" />
  //             </button>
  //           </div>
  //           <div className="location">
  //             <div className="component">
  //               <div id="map" className="map">
  //                 <div className="selectors">
  //                   <input
  //                     type="button"
  //                     value="Mapa"
  //                     id="mapSel"
  //                     className=".activeSelector"
  //                     onClick={e => setLocSelector(0)}
  //                   />
  //                   <input
  //                     type="button"
  //                     value="Imagens"
  //                     id="locImgSel"
  //                     className=".normalSel"
  //                     onClick={e => setLocSelector(1)}
  //                   />
  //                 </div>
  //                 {locSelector === 0 ? (
  //                   <SearchBarDiv>
  //                     <form
  //                       onSubmit={e => {
  //                         e.preventDefault();
  //                         // setLocation();
  //                         setLocation(e.target.children[0].value);
  //                       }}
  //                     >
  //                       <SearchBarInput />
  //                     </form>
  //                     <Search />
  //                   </SearchBarDiv>
  //                 ) : (
  //                   <button type="button" className="nextImage">
  //                     <NavigateNext />
  //                   </button>
  //                 )}
  //               </div>
  //             </div>
  //           </div>

  //           <button type="button" className="removeButton">
  //             <RemoveCircle className="remove" />
  //           </button>
  //         </div>
  //       </PresetLi>

  //       <PresetLi>
  //         <div className="text">
  //           <div className="buttons">
  //             <button type="button" className="upDownButton">
  //               <KeyboardArrowUp className="up" />
  //             </button>
  //             <button type="button" className="upDownButton">
  //               <KeyboardArrowDown className="down" />
  //             </button>
  //           </div>
  //           <div className="location">
  //             <div className="component">
  //               <div className="map">
  //                 <GoogleMap
  //                   mapContainerStyle={mapContainerStyle}
  //                   zoom={8}
  //                   center={center}
  //                 />
  //                 {locSelector === 0 ? (
  //                   <SearchBarDiv>
  //                     <form
  //                       onSubmit={e => {
  //                         e.preventDefault();
  //                         // setLocation();
  //                         setLocation(e.target.children[0].value);
  //                       }}
  //                     >
  //                       <SearchBarInput />
  //                     </form>
  //                     <Search />
  //                   </SearchBarDiv>
  //                 ) : (
  //                   <button type="button" className="nextImage">
  //                     <NavigateNext />
  //                   </button>
  //                 )}
  //               </div>
  //             </div>
  //           </div>

  //           <button type="button" className="removeButton">
  //             <RemoveCircle className="remove" />
  //           </button>
  //         </div>
  //       </PresetLi>
  //     </>
  //   );
  // }
};

export default Entry;
