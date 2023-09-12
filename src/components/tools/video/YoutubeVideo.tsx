import { FC, useState, useCallback } from "react";
import ReactPlayer from "react-player";
const YoutubeVideo: FC = () => {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [isEditing, setIsEditing] = useState(true);
  const handleChange = useCallback(
    (event: any) => {
      setUrl(event.target.value);
    },
    [url]
  );

  const urlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;

  const handleClick = () => {
    handleIsValid(url) ? setIsEditing(false) : setIsEditing(true);
  };
  
  const handleIsValid = (value: string) => {
    const valid = urlRegex.test(url)
    setIsValidUrl(valid);
    return valid
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
    
      handleIsValid(url) ? setIsEditing(false) : setIsEditing(true);
    }
  };
  return (
    <div className="w-full h-full">
      {isEditing ? (
        <div className="h-full flex justify-center items-center flex-col">
          <div>{isValidUrl ? '' : 'Url is failed'}</div>
          <input
            type="text"
            placeholder="Enter YouTube video link"
            className="border-[1px] border-solid border-borderPrimary"
            value={url}
            style={isValidUrl ? {borderColor: '#323232'} : {borderColor: 'red'}}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            autoFocus
            draggable={false}
          />
          <button
            className="w-40 h-9 bg-indigo-500 rounded-3xl text-white mt-4"
            onClick={() => handleClick()}
          >
            + Add Section
          </button>
        </div>
      ) : (
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
        ></ReactPlayer>
      )}
    </div>
  );
};

export default YoutubeVideo;
