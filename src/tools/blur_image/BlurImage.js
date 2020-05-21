import React, {useRef, useEffect, useState} from 'react';
import './blurImage.css'

const BlurImage = () => {
    const fileInput = useRef(null);
    const [fileMeta, setFileMeta] = useState();
    const [imageSelected, setImageSelected] = useState(false);

    const fileSelected = ({target}) => {
        if (target.files && target.files[0]) {
            setFileMeta(target.files[0])
        }
    };

    useEffect(() => {
        if (fileMeta) {
            const reader = new FileReader();

            reader.onload = function (e) {
                fileInput.current.src = e.target.result
            };

            reader.readAsDataURL(fileMeta);
            setImageSelected(true);
        }
    }, [fileMeta]);

    return (
        <div>
            <label htmlFor="the-file">Select an image: </label>
            <input
                type="file"
                accept=".jpg,.jpeg,.bmp,.png"
                id="the-file"
                name="the-file"
                onChange={fileSelected}
            />
            <br/>
            <ShowImageAndInput
                imageSelected={imageSelected}
                fileInputRef={fileInput}
            />
        </div>
    )
};

const ShowImageAndInput = ({imageSelected, fileInputRef}) => {
    const [blurPercentage, setBlurPercentage] = useState(0);

    if (imageSelected) {
        return <div>
            <img
                style={{
                    maxWidth: '100%',
                    WebKitFilter: `blur(${blurPercentage}px)`,
                    filter: `blur(${blurPercentage}px)`,
                }}
                alt={'Displays user selection from the-file input control.'}
                ref={fileInputRef}
            />
            <br/>
            <label>Input blur % </label>
            <input
                type={'number'}
                value={blurPercentage}
                onChange={({target}) => {
                    const n = parseInt(target.value) || 0;
                    if (n >= 0 && n <=100) {
                        setBlurPercentage(n)
                    }
                }}/>
        </div>
    } else {
        return null
    }
};

export default BlurImage;
