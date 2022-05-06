package DAO;

import model.Institution;
import model.News;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

// ------------------------------------------------------------------------ //

public class NewsDAO extends DAO {	
	
	public NewsDAO() {
		
		super();
		conectar();
	}
	
	public void finalize() { close(); }
	
	// ------------------------------------------------------------------------ //
	
	public News get(int id) {
		
		News news = null;
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = "SELECT * FROM news WHERE id = " + id;
			
			ResultSet rs = st.executeQuery(sql);	
	        
			if(rs.next()) news = new News(rs.getInt("id"), rs.getInt("inst_id"), rs.getDate("date"), rs.getString("title"), rs.getString("description"), rs.getString("image_url"));
			
	        st.close();
		} 
		catch(Exception e) { System.err.println(e.getMessage()); }
		return news;
	}

	// ------------------------------------------------------------------------ //
	
	public boolean insert(News news) {
		
		boolean status = false;
		
		try {
			
			String sql = "INSERT INTO news (inst_id, date, title, description, image_url) "
		               + "VALUES (" 
		               + news.getInstId() + ", '"
		               + news.getDate() + "', '"
		               + news.getTitle() + "', '"
		               + news.getDescription() + "', '"
		               + news.getImageUrl() + "');";
			
			PreparedStatement st = conexao.prepareStatement(sql);
			
			st.executeUpdate();
			st.close();
			status = true;
			
		} 
		catch (SQLException u) { throw new RuntimeException(u); }
		return status;
	}
	
	// ------------------------------------------------------------------------ //

	public boolean update(News news) {
		
		boolean status = false;
		
		try {
			
			String sql = "UPDATE news SET "
					   + "title = '" + news.getTitle() + "' "
					   + "description = '" + news.getDescription() + "' "
					   + "image_url = '" + news.getImageUrl() + "' " 
					   + "WHERE id = " + news.getId();
			
			PreparedStatement st = conexao.prepareStatement(sql);
			
			st.executeUpdate();
			st.close();
			status = true;
			
		} 
		catch (SQLException u) { throw new RuntimeException(u); }
		return status;
	}
	
	// ------------------------------------------------------------------------ //

	public List<News> getAll(int inst_id) { 
		
		List<News> news = new ArrayList<News>();
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM news WHERE inst_id = " + inst_id);
			
	        while(rs.next()) {	       
	        	
	        	News n = new News(rs.getInt("id"), rs.getInt("inst_id"), rs.getDate("date"), rs.getString("title"), rs.getString("description"), rs.getString("image_url"));
	        	
	        	news.add(n);
	        }
	        
	        st.close();
	        
		} 
		catch (Exception e) { System.err.println(e.getMessage()); }
		return news;
		
	}
	
	// ------------------------------------------------------------------------ //

	public boolean delete(int id) {
		
		boolean status = false;
		
		try {
			
			Statement st = conexao.createStatement();
			
			st.executeUpdate("DELETE FROM news WHERE id = " + id);
			st.close();
			status = true;
		} 
		catch (SQLException u) { throw new RuntimeException(u); }
		return status;
	}
}