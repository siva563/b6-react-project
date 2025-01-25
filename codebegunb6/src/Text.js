import React from 'react'
function Text(){
    return(
        <div>
            <form>
                <input type="type" placeholder="TYPE HERE" 
                 style={{
                        width: '100%', 
                        padding: '10px', 
                        fontSize: '14px', 
                        border: '2px solid #ccc', 
                        borderRadius: '5px', 
                        outline: 'none',
                        boxSizing: 'border-box', 
                        transition: 'border-color 0.3s'
                    }} />
            </form>
        </div>
    );
}
export default Text;
