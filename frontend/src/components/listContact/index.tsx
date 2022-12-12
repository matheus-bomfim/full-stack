import { useEffect, useState } from "react";
import Api from "../../services/api";
import { Box, Container } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { toast } from "react-toastify";
import pdfContact from "../../Reports/contacts";
interface ContactResponse {
  id: string;
  name: string;
  email: string[];
  telephone: string[];
}

const ListContact = () => {
  const [listContacts, setListContacts] = useState<ContactResponse[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    Api.get("users/contacts/", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setListContacts([...res.data]);
      })
      .catch(() => {
        localStorage.setItem("login", "false");
        localStorage.removeItem("token");
      });
  }, [listContacts, token]);

  const deleteContact = (id: string) => {
    Api.delete(`users/contacts/${id}`, {
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      toast.success("Deleção Concluida");
    });
  };

  return (
    <Container>
      {listContacts.length > 0 ? (
        listContacts.map((elem, i) => {
          return (
            <Box>
              <h2>Name: {elem.name}</h2>
              {elem.telephone.map((e, i) => {
                if (e.length > 0) {
                  return (
                    <h5 key={i + 1}>
                      {`Telephone ${i}`}: {e}
                    </h5>
                  );
                }
              })}
              {elem.email.map((e, i) => {
                if (e.length > 0) {
                  return (
                    <h5 key={i + 2}>
                      {`Email ${i}`}: {e}
                    </h5>
                  );
                }
              })}
              <div>
                <DeleteIcon
                  key={i + 1}
                  onClick={() => {
                    deleteContact(elem.id);
                  }}
                  fontSize="medium"
                />
                <PictureAsPdfIcon
                  key={i + 2}
                  onClick={() => {
                    pdfContact(listContacts);
                  }}
                  fontSize="medium"
                />
              </div>
            </Box>
          );
        })
      ) : (
        <h2>Nenhum Contato Existente</h2>
      )}
    </Container>
  );
};

export default ListContact;
