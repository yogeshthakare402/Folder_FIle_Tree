import React, { useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';

const Folder = ({explorer, handleInsertNode, handleRenameNode, handleDeleteNode}) => {
    const [expand, setExpand] = useState(false);
    const [showbtn, setShowbtn] = useState(true);
    const [addContent, setAddContent] = useState({
        visible: false,
        isFolder: false
    });
    const [renameInput, setRenameInput] = useState(false);
    const [renameValue, setRenameValue] = useState("");

    const handleNewChange = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setAddContent({
            visible: true,
            isFolder: isFolder
        });
    }

    const addFolder = (e) => {

        if (e.keyCode === 13 && e.target.value) {
            console.log(explorer.name, e.target.value, addContent.isFolder);
            //explorer.name = folderId
            handleInsertNode(explorer.name, addContent.isFolder, e.target.value);
            setAddContent({ ...addContent, visible: false })
        }

    }
    const handleRename = (e, name) => {
        e.stopPropagation();
        setRenameInput(!renameInput);
        setRenameValue(name)
    }

    const renameFolder = (e) => {
        
        if (e.keyCode === 13 && e.target.value) {
            console.log("Indide rename");
            console.log(e.target.value);
            handleRenameNode(explorer.name, e.target.value)
            setRenameInput(!renameInput);
        }
    }
    const handleDelete = (e,name)=>{
        e.stopPropagation();
        console.log(name);
        handleDeleteNode(name)
    }

    if (explorer.isFolder && explorer.name) {
        return (
            <div>
                <div className={explorer.isFolder ? "folder" : "file"} onClick={() => setExpand(!expand)}>
                    <span>{explorer.isFolder ? "📁" : "📄"}
                        {renameInput ? (
                            <span className='renameContainer'>
                                <input type="text"
                                    value={renameValue}
                                    onChange={(e) => setRenameValue(e.target.value)}
                                    onKeyDown={(e) => renameFolder(e)}
                                    autoFocus
                                />
                            </span>
                        ) : (
                            <span>{explorer.name}</span>
                        )}
                    </span>

                    <span className='btn-group'>
                        {showbtn ? (
                            <span
                                onMouseEnter={(e) => {
                                    setShowbtn(!showbtn)
                                }}
                            >{<BiDotsVertical />}</span>
                        ) : (
                            <span className='btns'
                                onMouseLeave={(e) => {
                                    setShowbtn(!showbtn)
                                }}
                            >
                                <li onClick={(e) => handleNewChange(e, true)}>Folder+</li>
                                <li onClick={(e) => handleNewChange(e, false)}>File+</li>
                                <li onClick={(e) => handleRename(e, explorer.name)}>Rename</li>
                                <li onClick={(e) => handleDelete(e, explorer.name)}>Delete</li>
                            </span>
                        )}
                    </span>


                </div>
                <div className='subFolder' style={{ display: expand ? "block" : "none" }}>
                    {addContent.visible &&
                        <div className='inputContainer'>
                            <span>{addContent.isFolder ? "📁" : "📄"}</span>
                            <input
                                type="text"
                                onKeyDown={(e) => addFolder(e)}
                                onBlur={() => setAddContent({ ...addContent, visible: false })}
                                autoFocus
                            />
                        </div>
                    }

                    {explorer.items.map((exp) => {
                        return <Folder explorer={exp} handleInsertNode={handleInsertNode} handleRenameNode={handleRenameNode} handleDeleteNode={handleDeleteNode} key={exp.name} />
                    })}
                </div>
            </div>

        )
    } else if(explorer.name){
        return (<div className='file'>
            <span>
                <span>{"📄"}</span>
                <span>{renameInput ? (
                    <span className='renameContainer'>
                        <input type="text"
                            value={renameValue}
                            onChange={(e) => setRenameValue(e.target.value)}
                            onKeyDown={(e) => renameFolder(e)}
                            autoFocus
                        />
                    </span>
                ) : (
                    <span>{explorer.name}</span>
                )}
                </span>
            </span>

            <span className='btn-group'>
                {showbtn ? (
                    <span
                        onMouseEnter={(e) => {
                            setShowbtn(!showbtn)
                        }}
                    >{<BiDotsVertical />}</span>
                ) : (
                    <span className='btns'
                        onMouseLeave={(e) => {
                            setShowbtn(!showbtn)
                        }}
                    >
                        <li onClick={(e) => handleRename(e, explorer.name)}>Rename</li>
                        <li onClick={(e) => handleDelete(e, explorer.name)}>Delete</li>
                    </span>
                )}
            </span>

        </div>)
    }

}

export default Folder