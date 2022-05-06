package DAO;

import java.sql.*;

// ------------------------------------------------------------------------ //

public class DAO {
	
	protected Connection conexao;
	
	public DAO() { conexao = null; }
	
	// ------------------------------------------------------------------------ //
	
	public boolean conectar() {

		int porta = 5432;
		
		String driverName = "org.postgresql.Driver";                    
		String serverName = "localhost";
		String mydatabase = "quem_necessita";
		String url = "jdbc:postgresql://" + serverName + ":" + porta +"/" + mydatabase;
		String username = "ti2cc";
		String password = "ti@cc";
		
		boolean status = false;

		try {
			
			Class.forName(driverName);
			conexao = DriverManager.getConnection(url, username, password);
			status = (conexao == null);
			System.out.println("> Conexão efetuada com sucesso.");
			
		} 
		catch(ClassNotFoundException e) { System.err.println("x Conexão não efetuada - Driver não encontrado - " + e.getMessage()); }
		catch(SQLException e) { System.err.println("x Conexão não efetuada - " + e.getMessage()); }
		
		return status;
	}
	
	// ------------------------------------------------------------------------ //
	
	public boolean close() {
		
		boolean status = false;
		
		try {
			
			conexao.close();
			status = true;
		} 
		catch (SQLException e) { System.err.println(e.getMessage()); }
		return status;
	}
}