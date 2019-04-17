"use strict";

exports.setRespuesta = (codigo, response) => {
    return { // Error response
        statusCode: codigo,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            response
        }),
    };
};