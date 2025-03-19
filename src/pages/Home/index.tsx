import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '../../components/ui/Card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '../../components/ui/Tabs';
import {
  UsersRound,
  Calendar,
  AlertTriangle,
  FileCheck,
  Bell,
  BookOpen,
  UserPlus,
  ClipboardCheck,
  Clock,
  User
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export default function Index() {
  const stats = [
    { 
      title: 'Total de Alunos', 
      value: '1,248', 
      icon: UsersRound,
      subtext: '12 novos alunos este mês'
    },
    { 
      title: 'Atendimentos Agendados', 
      value: '24', 
      icon: Calendar,
      subtext: 'Para os próximos 7 dias'
    },
    { 
      title: 'Ocorrências', 
      value: '18', 
      icon: AlertTriangle,
      subtext: '5 pendentes de resolução'
    },
    { 
      title: 'Autorizações', 
      value: '32', 
      icon: FileCheck,
      subtext: '8 aguardando resposta'
    },
  ];

  const recentGuidance = [
    {
      id: 1,
      student: 'Maria Silva',
      type: 'Comportamental',
      date: '15/03/2024',
      time: '14:30'
    },
    {
      id: 2,
      student: 'João Oliveira',
      type: 'Acadêmica',
      date: '14/03/2024',
      time: '10:15'
    },
    {
      id: 3,
      student: 'Ana Santos',
      type: 'Disciplinar',
      date: '13/03/2024',
      time: '16:45'
    },
    {
      id: 4,
      student: 'Pedro Costa',
      type: 'Acadêmica',
      date: '12/03/2024',
      time: '09:00'
    },
    {
      id: 5,
      student: 'Lucia Ferreira',
      type: 'Comportamental',
      date: '11/03/2024',
      time: '13:20'
    }
  ];

  const recentActivities = [
    { 
      id: 1, 
      title: 'Nova ocorrência registrada para João Silva',
      description: 'Ocorrência disciplinar registrada pelo professor Carlos Santos.',
      icon: AlertTriangle,
      time: 'Há 10 minutos'
    },
    { 
      id: 2, 
      title: 'Orientação concluída para Maria Oliveira',
      description: 'Orientação acadêmica realizada pela coordenadora Ana Lima.',
      icon: BookOpen,
      time: 'Há 30 minutos'
    },
    { 
      id: 3, 
      title: 'Atendimento agendado com os pais de Pedro Santos',
      description: 'Agendamento para discussão de desempenho acadêmico.',
      icon: Calendar,
      time: 'Há 1 hora'
    },
    { 
      id: 4, 
      title: 'Autorização aprovada para Ana Costa',
      description: 'Autorização para participação no passeio ao museu.',
      icon: ClipboardCheck,
      time: 'Há 2 horas'
    },
    { 
      id: 5, 
      title: 'Novo aluno cadastrado: Lucas Pereira',
      description: 'Matrícula realizada para o 7º Ano B.',
      icon: UserPlus,
      time: 'Há 3 horas'
    },
  ];

  const upcomingAppointments = [
    { 
      id: 1, 
      student: 'João Silva', 
      responsible: 'Maria Silva',
      professional: 'Dr. Carlos Santos',
      date: '15/03/2024',
      time: '14:00',
      status: 'confirmado'
    },
    { 
      id: 2, 
      student: 'Ana Oliveira', 
      responsible: 'Carlos Oliveira',
      professional: 'Dra. Paula Oliveira',
      date: '16/03/2024',
      time: '10:30',
      status: 'pendente'
    },
    { 
      id: 3, 
      student: 'Pedro Santos', 
      responsible: 'Juliana Santos',
      professional: 'Dr. Marcos Lima',
      date: '17/03/2024',
      time: '15:45',
      status: 'confirmado'
    },
    { 
      id: 4, 
      student: 'Carla Pereira', 
      responsible: 'Roberto Pereira',
      professional: 'Dra. Lucia Ferreira',
      date: '18/03/2024',
      time: '09:15',
      status: 'pendente'
    },
  ];

  const latestIncidents = [
    { 
      id: 1, 
      student: 'Ana Silva', 
      class: '9º Ano A', 
      type: 'Comportamento', 
      description: 'Uso indevido do celular durante a aula', 
      date: '15/03/2024',
      teacher: 'Prof. Carlos Santos',
      status: 'pendente' 
    },
    { 
      id: 2, 
      student: 'Bruno Costa', 
      class: '7º Ano B', 
      type: 'Ausência', 
      description: 'Não compareceu à aula sem justificativa', 
      date: '14/03/2024',
      teacher: 'Profa. Paula Oliveira',
      status: 'resolvido' 
    },
    { 
      id: 3, 
      student: 'Carla Oliveira', 
      class: '8º Ano C', 
      type: 'Uniforme', 
      description: 'Não estava usando o uniforme escolar completo', 
      date: '13/03/2024',
      teacher: 'Prof. André Lima',
      status: 'pendente' 
    },
    { 
      id: 4, 
      student: 'Daniel Santos', 
      class: '6º Ano A', 
      type: 'Atraso', 
      description: 'Chegou 20 minutos atrasado na primeira aula', 
      date: '12/03/2024',
      teacher: 'Profa. Regina Alves',
      status: 'resolvido' 
    },
    { 
      id: 5, 
      student: 'Eduarda Lima', 
      class: '9º Ano B', 
      type: 'Comportamento', 
      description: 'Conversa excessiva durante a explicação', 
      date: '11/03/2024',
      teacher: 'Prof. Marcos Souza',
      status: 'pendente' 
    },
  ];

  const today = new Date();
  
  const formattedDay = format(today, "cccc", { locale: pt })
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <>
      <div className="space-y-6">
        <div className="bg-green-50 rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Olá, Wesley Bortoloso! 👋</h1>
            <p className="text-gray-600">
              Hoje é {formattedDay}, {format(today, "d 'de' MMMM 'de' yyyy", { locale: pt })}.
            </p>
            <p className="text-gray-600 mt-1">
              Você tem 5 notificações pendentes.
            </p>
          </div>
          <Button variant="default" className="bg-green-600 hover:bg-green-700 gap-2">
            <Bell className="h-4 w-4" />
            Ver Notificações
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <Card key={index} className="border rounded-lg shadow-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 font-medium">{stat.title}</h3>
                  <div className="bg-gray-100 p-2 rounded-full">
                    <stat.icon className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="visao-geral" className="w-full">
            <TabsList className="border-b w-full rounded-none bg-transparent pb-0 justify-start">
              <TabsTrigger value="visao-geral" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent font-medium">
                Visão Geral
              </TabsTrigger>
              <TabsTrigger value="atividades" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent font-medium">
                Atividades Recentes
              </TabsTrigger>
              <TabsTrigger value="atendimentos" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent font-medium">
                Atendimentos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="visao-geral" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <Card className="col-span-1 lg:col-span-3 border rounded-lg shadow-sm">
                  <CardHeader>
                    <CardTitle>Últimas Ocorrências</CardTitle>
                    <CardDescription>Ocorrências mais recentes registradas no sistema</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {latestIncidents.map((incident) => (
                        <div key={incident.id} className="p-3 border rounded-lg flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                              <User className="h-4 w-4 text-gray-500" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{incident.student}</p>
                              <p className="text-xs text-gray-500">{incident.type} - {incident.date}</p>
                            </div>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              incident.status === 'pendente' 
                                ? 'bg-amber-100 text-amber-800 border-amber-200' 
                                : 'bg-green-100 text-green-800 border-green-200'
                            }`}
                          >
                            {incident.status === 'pendente' ? 'Pendente' : 'Resolvido'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center border-t pt-4">
                    <Button variant="outline">Ver todas as ocorrências</Button>
                  </CardFooter>
                </Card>

                <Card className="col-span-1 lg:col-span-2 border rounded-lg shadow-sm">
                  <CardHeader>
                    <CardTitle>Orientações Recentes</CardTitle>
                    <CardDescription>Últimas 5 orientações registradas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentGuidance.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-gray-800">{item.student}</p>
                                <p className="text-sm text-gray-500">{item.date}{item.time ? `, ${item.time}` : ''}</p>
                              </div>
                              <Badge 
                                variant="outline" 
                                className={`
                                  ${item.type === 'Comportamental' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                                  ${item.type === 'Acadêmica' ? 'bg-blue-100 text-blue-800 border-blue-200' : ''}
                                  ${item.type === 'Disciplinar' ? 'bg-purple-100 text-purple-800 border-purple-200' : ''}
                                `}
                              >
                                {item.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center border-t pt-4">
                    <Button variant="outline">Ver todas as orientações</Button>
                  </CardFooter>
                </Card>
              </div>

              <Card className="border rounded-lg shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Próximos Eventos</h3>
                  <div className="flex items-center justify-center py-8">
                    <p className="text-gray-500">Nenhum evento agendado para os próximos dias.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="atividades" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                  <CardDescription>Últimas atividades registradas no sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="py-4 border-b last:border-b-0">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-full text-green-500 flex-shrink-0`}>
                            <activity.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <p className="font-medium text-gray-800">{activity.title}</p>
                                <p className="text-sm text-gray-500 mt-0.5">{activity.description}</p>
                              </div>
                              <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">{activity.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <Button variant="outline">Carregar mais atividades</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="atendimentos" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Próximos Atendimentos</CardTitle>
                  <CardDescription>Atendimentos agendados com responsáveis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="py-4 border-b last:border-b-0">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full text-green-500 flex-shrink-0">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                              <div>
                                <p className="font-medium text-gray-800">{appointment.student}</p>
                                <p className="text-sm text-gray-500 mt-0.5">Responsável: {appointment.responsible}</p>
                              </div>
                              <div className="flex flex-col items-center md:items-end gap-1">
                                <p className="text-sm font-medium">{appointment.professional}</p>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5 text-gray-400" />
                                  <p className="text-sm text-gray-500">{appointment.date} às {appointment.time}</p>
                                </div>
                                <Badge 
                                  variant="outline" 
                                  className={`
                                    ${appointment.status === 'confirmado' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                                    ${appointment.status === 'pendente' ? 'bg-amber-100 text-amber-800 border-amber-200' : ''}
                                  `}
                                >
                                  {appointment.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <Button variant="outline">Ver todos os atendimentos</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
