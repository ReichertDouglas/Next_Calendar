'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

interface CalendarProps {
    tirulo: string;
    data: string;
    descricao: string;
}

interface CalendarEventsProps {
    compromissos: CalendarProps[];
}

export default function Canlendar({ compromissos }: CalendarEventsProps) {
    return (
        <div className="m-8 p-6 bg-gray-300 rounded-lg shadow-md">
            <FullCalendar 
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGrigMonth"
                weekends={true}
                events={compromissos}
                locale={"pt-br"}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth, dayGridWeek, dayGridDay'
                }}
                buttonText={{today: 'Hoje', month: 'Mês', week: 'Semana', day: 'Dia'}}
                height="auto"
            />
        </div>
    )
}