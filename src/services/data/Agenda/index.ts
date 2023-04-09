import { IAgenda } from "../../../interfaces/Agenda.interface";
import api from "../../api";

class AgendaData {
  index() {
    return api.get<IAgenda>('/agenda')
  }
  update(id: number, data: string) {
    console.log(id, data)
    return api.put<IAgenda>(`/agenda/${id}`, { castracao: data })
  }
}

export default new AgendaData();