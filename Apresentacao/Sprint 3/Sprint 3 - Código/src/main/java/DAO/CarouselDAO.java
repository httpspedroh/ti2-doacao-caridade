package DAO;

import model.Carousel;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

// ------------------------------------------------------------------------ //

public class CarouselDAO extends DAO {	
	
	public CarouselDAO() {
		
		super();
		conectar();
	}
	
	public void finalize() { close(); }
	
	// ------------------------------------------------------------------------ //
	
	public Carousel get(int id) {
		
		Carousel carousel = null;
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = "SELECT * FROM carousel WHERE id = " + id;
			
			ResultSet rs = st.executeQuery(sql);	
	        
			if(rs.next()) carousel = new Carousel(rs.getInt("id"), rs.getString("image_url"), rs.getString("description"));
			
	        st.close();
		} 
		catch(Exception e) { System.err.println(e.getMessage()); }
		return carousel;
	}

	// ------------------------------------------------------------------------ //
	
	public boolean insert(Carousel carousel) {
		
		boolean status = false;
		
		try {
			
			String sql = "INSERT INTO carousel (image_url, description) "
		               + "VALUES ('" 
		               + carousel.getImageUrl() + "', '"
		               + carousel.getDescription() + "');";
			
			PreparedStatement st = conexao.prepareStatement(sql);
			
			st.executeUpdate();
			st.close();
			status = true;
			
		} 
		catch (SQLException u) { throw new RuntimeException(u); }
		return status;
	}
	
	// ------------------------------------------------------------------------ //

	public Carousel getOffset(int index) {
		
		Carousel carousel = null;
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = "SELECT * FROM carousel LIMIT 1 OFFSET " + index;
			
			ResultSet rs = st.executeQuery(sql);	
	        
			if(rs.next()) carousel = new Carousel(rs.getInt("id"), rs.getString("image_url"), rs.getString("description"));
			
	        st.close();
		} 
		catch(Exception e) { System.err.println(e.getMessage()); }
		return carousel;
	}
	
	// ------------------------------------------------------------------------ //

	public List<Carousel> getAll() { 
		
		List<Carousel> images = new ArrayList<Carousel>();
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM carousel");
			
	        while(rs.next()) {	       
	        	
	        	Carousel i = new Carousel(rs.getInt("id"), rs.getString("image_url"), rs.getString("description"));
	        	
	        	images.add(i);
	        }
	        
	        st.close();
	        
		} 
		catch (Exception e) { System.err.println(e.getMessage()); }
		return images;
		
	}
	
	// ------------------------------------------------------------------------ //

	public boolean delete(int id) {
		
		boolean status = false;
		
		try {
			
			Statement st = conexao.createStatement();
			
			st.executeUpdate("DELETE FROM carousel WHERE id = " + id);
			st.close();
			status = true;
		} 
		catch (SQLException u) { throw new RuntimeException(u); }
		return status;
	}
}