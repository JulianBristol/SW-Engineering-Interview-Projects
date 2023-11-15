import React, { useState } from 'react'

enum STATUS {
    SUCCESS = 0,
    PENDING = 1,
    FAILED = 3
}
const Documents = () => {

    const [documentDisplay, setDocumentDisplay] = useState(false);

    const toggleDocumentDisplay = (orientation: boolean) => {
        console.log("toggledDocuments to ", orientation);
        setDocumentDisplay(orientation)
    }

    const documents = [
        {
            text: "2022 W2 FILE.pdf",
            status: STATUS.PENDING
        },
        {
            text: "2022 W2 FILE.pdf",
            status: STATUS.FAILED
        },
        {
            text: "2022 W2 FILE.pdf",
            status: STATUS.SUCCESS
        },
    ]

  return (
    <div>
        <div>
        Your Documents
        <button onClick={() => toggleDocumentDisplay(false)}>gridIcon</button>
        <span style={{border: '1px solid #DBDFE4', margin: '0 5px'}}/>
        <button onClick={() => toggleDocumentDisplay(true)}>listIcon</button>
        </div>

        {/* display documents: todo add styling */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto" }}>
            {/* add gradient */}
            <div style={{  }}>{documents.length} Documents</div>
            <button>UPLOAD</button>
        </div>
        
        
                <div style={{ display: `${documentDisplay ? "flex" : "block"}` }}>
        {documents.map((item, k) => (
                    <div>
                    <div style={{ display: "flex" }}>
                        image
                        <div>
                            <div key={k} style={{  }}>
                                {item.text}
                            </div>
                            {item.status}
                        </div>
                    </div>
                </div>
            ))}
                    </div>

            
    </div>
)}

export default Documents