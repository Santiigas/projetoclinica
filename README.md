# projetoclinica
Neste projeto, apresento um site destinado ao agendamento de consultas em uma clínica de psicologia. Na página inicial, os usuários têm acesso a opções de dias e horários disponíveis para agendamento. Ao selecionar uma data, são redirecionados para a página de cadastro, onde preenchem um formulário para concluir o agendamento.

O formulário incorpora recursos abrangentes para garantir a verificação e validação de todos os dados de entrada. No campo "nome completo", apenas letras e espaços entre os sobrenomes são aceitos. Além disso, há verificações rigorosas para a data de nascimento e CPF. Caso algum campo esteja em branco ou preenchido de maneira incorreta, uma mensagem de erro é exibida, orientando o usuário a realizar as correções necessárias. O formulário só é submetido após o preenchimento correto de todos os campos.

Para a apresentação adequada da data de nascimento, CPF e número de telefone para contato, implementamos funções em JavaScript que aplicam máscaras conforme o usuário digita.

Ao escolher uma data e preencher o formulário, todas as informações são armazenadas no local storage do navegador. Elas são organizadas em arrays para facilitar a manipulação e recuperação posterior.

Finalizando o processo, o paciente recebe um comprovante de agendamento que inclui todas as informações fornecidas, recuperadas do local storage. O comprovante também exibe o número de protocolo, data e hora do agendamento. Esses detalhes são de extrema importância tanto para o paciente quanto para a clínica.

Ao concluir o agendamento, o paciente tem a opção de imprimir o comprovante. A função de enviar o comprovante por e-mail em formato PDF será implementada em fases subsequentes do projeto.
