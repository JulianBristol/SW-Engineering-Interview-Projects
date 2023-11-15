import React, { useState } from 'react'
import img from '../assets/taxImg.png'
import gridIcon from "../assets/gridIcon.svg"
import listIcon from "../assets/gridIcon.svg"

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
        <button onClick={() => toggleDocumentDisplay(false)}><img src={gridIcon} alt='gridIcon'/></button>
        <span style={{border: '1px solid #DBDFE4', margin: '0 5px'}}/>
        <button onClick={() => toggleDocumentDisplay(true)}><img src={listIcon} alt='gridIcon'/></button>
        </div>

        {/* display documents: todo add styling */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto" }}>
            {/* add gradient */}
            <div style={{  }}>{documents.length} Documents</div>
            <button>UPLOAD</button>
        </div>
        
        
                <div style={{ display: `${documentDisplay ? "block" : "flex"}` }}>
        {documents.map((item, k) => (
                    <div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto"  }}>
                        <img src={img} alt="tax img" style={{ height: '100px', width: "100px"}}/>
                        <div>
                            <div key={k} style={{  }}>
                                {item.text}
                            </div>
                            {item.status}
                        </div>
                        dots
                    </div>
                </div>
            ))}
                    </div>

            
    </div>
)}

export default Documents