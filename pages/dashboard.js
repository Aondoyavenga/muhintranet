
import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';
import React, {Fragment, useEffect} from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const FileFeed = () =>{
    // const hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/'
    // const hostUrl = `http://localhost:${port}/`

    const onCreated = (args) => {
        console.log('File Manager has been created successfully')
    }

    const onSuccess = (data) => {
        console.log(data)
    }
    const onFailure = (data) =>{
        console.log('')
    }

     // File Manager Drag start event
    const onFileDragStart = (args) =>{
        console.log("File Drag Start");
    }
    // File Manager Drag start event
    const onFileDragStop = (args) =>{
        console.log("File Drag Stop");
    }
    // File Manager Drag start event
    const onFileDragging = (args) =>{
        console.log("File Dragging");
    }
    // File Manager Drag start event
    const onFileDropped = (args) =>{
        console.log("File Dropped");
    }
   
    var hostUrl = 'http://localhost:8090/';
    return (
        <Fragment>
            <main  className='flex flex-row'>

                <SideBar />
                <section
                    className='flex-1 bg-slate-200'
                >
                    <Header auth />

                    <div className="control-section"
                    >
                        <FileManagerComponent 
                            id='file'
                            view='LargeIcons'
                            enablePersistence={true}
                            ajaxSettings = {{
                                url: hostUrl,
                                downloadUrl: hostUrl + 'Download',
                                uploadUrl: hostUrl + 'Upload',
                                getImageUrl: hostUrl + 'GetImage'
                            }}
                            path='/Muh'
                            created={data =>onCreated(data)}
                            success={data =>onSuccess(data)}
                            failure={data =>onFailure(data)}

                            // ref={s => s.fileObj = s}
                            allowDragAndDrop={true}
                            fileDropped={data => onFileDropped(data)}
                            fileDragStop={data => onFileDragStop(data)} 
                            fileDragging={data => onFileDragging(data)} 
                            fileDragStart={data => onFileDragStart(data)} 

                        >
                            <Inject 
                                services={[
                                    Toolbar,
                                    DetailsView,
                                    NavigationPane
                                ]}
                            />
                        </FileManagerComponent>
                    </div>
                </section>
            </main>

        </Fragment>
    )
}

export default FileFeed