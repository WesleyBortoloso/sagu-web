import { PageTitle } from '../../components/ui/PageTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Alert, AlertTitle, AlertDescription } from '../../components/ui/Alert';
import { UsersRound, BookOpen, AlertTriangle, MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function Home() {
  const stats = [
    { title: 'Total de Alunos', value: '1,248', icon: UsersRound, color: 'bg-blue-100 text-blue-700' },
    { title: 'Turmas Ativas', value: '42', icon: BookOpen, color: 'bg-green-100 text-green-700' },
    { title: 'Ocorrências Abertas', value: '18', icon: AlertTriangle, color: 'bg-amber-100 text-amber-700' },
    { title: 'Orientações Pendentes', value: '7', icon: MessageSquare, color: 'bg-purple-100 text-purple-700' },
  ];

  const recentAppointments = [
    { id: 1, student: 'Maria Silva', class: '8º Ano B', date: '14/06/2023', time: '14:30', type: 'Responsável' },
    { id: 2, student: 'João Costa', class: '6º Ano A', date: '15/06/2023', time: '10:15', type: 'Aluno' },
    { id: 3, student: 'Ana Paula', class: '9º Ano C', date: '16/06/2023', time: '09:00', type: 'Responsável' },
  ];

  const recentGuidance = [
    { id: 1, student: 'Pedro Oliveira', class: '7º Ano A', date: '13/06/2023', type: 'Comportamental', status: 'Concluída' },
    { id: 2, student: 'Luana Santos', class: '9º Ano B', date: '12/06/2023', type: 'Acadêmica', status: 'Pendente' },
    { id: 3, student: 'Gabriel Mendes', class: '6º Ano C', date: '10/06/2023', type: 'Vocacional', status: 'Concluída' },
  ];

  return (
    <>
      <Alert className="mb-6 border-l-4 border-l-primary">
        <Sparkles className="h-5 w-5" />
        <AlertTitle className="text-lg font-medium">Olá, professor!</AlertTitle>
        <AlertDescription>
          Bem-vindo ao SAGU, você tem ocorrências e orientações pendentes hoje!
        </AlertDescription>
      </Alert>
      
      <PageTitle
        title="Página Inicial"
        subtitle="Informações gerais e recentes"
      />
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Últimas Orientações</CardTitle>
              <Button variant="outline" size="sm" className="h-8">
                Ver todas
              </Button>
            </div>
            <CardDescription>Orientações recentes dos alunos</CardDescription>
          </CardHeader>
          <CardContent>
            {recentGuidance.length > 0 ? (
              <div className="space-y-4">
                {recentGuidance.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MessageSquare className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.student}</h4>
                        <p className="text-sm text-muted-foreground">{item.class} • {item.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{item.date}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'Concluída' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Nenhuma orientação registrada recentemente.
              </p>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Próximos Atendimentos</CardTitle>
              <Button variant="outline" size="sm" className="h-8">
                Ver todos
              </Button>
            </div>
            <CardDescription>Atendimentos agendados</CardDescription>
          </CardHeader>
          <CardContent>
            {recentAppointments.length > 0 ? (
              <div className="space-y-4">
                {recentAppointments.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Calendar className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.student}</h4>
                        <p className="text-sm text-muted-foreground">{item.class} • {item.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{item.date}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Nenhum atendimento agendado para os próximos dias.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
