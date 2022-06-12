import React from 'react'
import { API } from "../../backend";

function ImageHelper({product}) {
    let imageUrl = product ? `${API}/product/photo/${product._id}` : `https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    return (
        <div className="rounded border border-success p-2">
                <img
                  src={imageUrl}
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
        </div>
    )
}

export default ImageHelper
