import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

interface ContactPdf{
    name:string
    email:string[]
    telephone:string[]
}
const pdfContact = (contacts:ContactPdf[]) => {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    
    const pdfFormat = {content:[{text: 'Lista de Contatos', style: 'header',},
    {
        ul: contacts.map((elem)=>{
            return [
                `Name: ${elem.name}`,
                `Emails: ${elem.email.join(",")}`,
                `Telephones: ${elem.telephone.join(",")}`
            ]
        })
    }
    ],
    styles: {
        header: {
            bold: true,
            fontSize: 15
        }
    },
    defaultStyle: {
        fontSize: 12
    },
}
    return pdfMake.createPdf(pdfFormat).open()
}

export default pdfContact