import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';

const PDFViewer = ({ filename }) => {
    const viewer = useRef();
    const instance = useRef();
  
    useEffect(() => {
      WebViewer({
        path: '/webviewer/lib',
        initialDoc: `/uploads/${filename}`,
      }, viewer.current).then(inst => {
        instance.current = inst
      })
    }, [filename])
    
    useEffect(() => {
      if (instance.current) {
        instance.current.loadDocument(`/pdf/Arslan-FrontEnd-Resume.pdf`)
      }
    }, [])

    return (
      <div className='pdf-viewer-file'>
        <div ref={viewer} className="pdf-viewer" style={{ height: '600px' }} />
      </div>
    );
};

export default PDFViewer;
