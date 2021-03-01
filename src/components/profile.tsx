import React from "react";
import IDataInfo from "../interfaces/IDataInfo";
import { Typography, Descriptions, List } from "antd";
import moment from "moment-timezone";

const { Title } = Typography;
const { Item } = Descriptions;
interface IProps {
  seccion: string;
  data: Array<IDataInfo>;
}

const Profile = (info: any) => {
  const {
    data: { data, seccion },
  } = info;
  console.log(data);

  return (
    /*  <Descriptions title={seccion} layout="vertical">
      {

        data.map((m:IDataInfo)=>
            <>
                <Item label="">{m.titulo}</Item>
                <Item label="">{m.entidad}</Item>
                {m.estudio === true ? (
                    <>
                    <Item label="Terminación">{moment(m.fechaFin,"America/Bogota").format("YYYY MM")}</Item>
                    </>
                ) : (
                    <>
                    <Item label="Fecha Inicio">{m.fechaInicio}</Item>
                    <Item label="Fecha Fin">{m.fechaInicio}</Item>
                    <Item label="Descripcion" span={2}>
                    {m.description}
                    </Item>
                    </>
                )}
            </>
        )

      }
    </Descriptions> */
    <List
      size="small"
      header={<div>{seccion}</div>}
      bordered
      dataSource={data}
      renderItem={(item: IDataInfo) => (
        <List.Item>
          {item.estudio === true ? (
            <List.Item.Meta
              title={
                <>
                  <span style={{ display: "block" }}>
                    {item.titulo} | {item.entidad}{" "}
                  </span>
                  <span>{item.fechaFin} </span>
                </>
              }
              description={item.description}
            />
          ) : (
            <List.Item.Meta
              title={
                <>
                  <span style={{ display: "block" }}>
                    {item.titulo} | {item.entidad}{" "}
                  </span>
                 
                </>
              }
              description={<>
                <p>{item.description}</p>
                <span >{item.fechaInicio} - {item.fechaFin} </span>
              </>}
            />
          )}
        </List.Item>
      )}
    />
  );
};
export default Profile;
