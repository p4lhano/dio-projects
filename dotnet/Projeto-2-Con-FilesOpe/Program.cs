var pathDirTeste = Path.Combine(Environment.CurrentDirectory,"testes_files");
var dirTeste = Directory.CreateDirectory(pathDirTeste);

String path = Path.Combine(dirTeste.ToString(),"teste.txt");

using StreamWriter sWriter = File.CreateText(path);

sWriter.WriteLine("Escreva");
// sWriter.Flush();
// sWriter.Close();