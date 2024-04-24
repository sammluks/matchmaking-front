import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloseIcon } from "../../assets/Icons/closeIcon";
import { FileIcon } from "../../assets/Icons/fileIcon";

export default function FileInput( { onFileChange } ) {
    const [file, setFile] = useState(null);

    const removeFile = useCallback(() => {
        setFile(null);
    }, [file]);

    const onDrop = useCallback((files) => {
        setFile(files[0]);
        onFileChange(files[0])
    }, [])

    
    const dropzone = useDropzone({
        onDrop, accept: {
            "image/png" : ['.png']
        } 
    })
    
    if(file) return <HasFile file={file} removeFile={removeFile}/>;

    return <Input dropzone={dropzone}/>
}

const Input = ({ dropzone }) => {

    const {getRootProps, getInputProps, isDragActive} = dropzone;

    return (
        <div 
        {...getRootProps()}
        className="w-100% h-full rounded-lg border-dashed border-4 border-gray-600 hover:broder-gray-500 bg-gray-700 hover:bg-gray-600 transition-all">
            <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
                    <p className="mb-2 text-lg text-gray-400">
                        <span className="font-bold">Clique para enviar</span> ou arraste aqui
                    </p>
                    <p className="text-gray-400 text-sm">Imagem</p>
                </div>
            </label>
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}

const HasFile = ({file, removeFile}) => {
    return (
        <div className="w-100% h-full rounded-lg border-dashed border-4 border-gray-600 bg-gray-700 flex justify-center items-center">
            <div className="bg-black w-36 rounded-md shadow-md flex gap-3 items-center justify-center">
                <FileIcon className="w-10 h-10 my-4 ml-1" />
                <span className="text-sm text-gray-500 my-4">{file?.name}</span>
                <button type="button" onClick={removeFile} className="place-self-start mt-1 p-1">
                    <CloseIcon className="w-5 h-5"/>
                </button>
            </div>
        </div>
    )
}