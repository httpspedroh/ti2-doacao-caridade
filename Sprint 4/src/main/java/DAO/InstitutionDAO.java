package DAO;

import model.Institution;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

// ------------------------------------------------------------------------ //

public class InstitutionDAO extends DAO {	
	
	public InstitutionDAO() {
		
		super();
		conectar();
	}
	
	public void finalize() { close(); }
	
	// ------------------------------------------------------------------------ //

	public boolean insert(Institution institution) {
		
		boolean status = false;
		
		try {
			
			String sql = "INSERT INTO institutions (username, name, password, image_url, category, address, phone, description) "
		               + "VALUES ('" 
		               + institution.getUsername() + "', '"
		               + institution.getName() + "', '"
		               + institution.getPassword() + "', '"
		               + institution.getImageUrl() + "', "
		               + institution.getCategory() + ", '"
		               + institution.getAddress() + "', '"
		               + institution.getPhone() + "', '"
		               + institution.getDescription() + "');";
			
			PreparedStatement st = conexao.prepareStatement(sql);
			
			st.executeUpdate();
			st.close();
			status = true;
			
		} 
		catch (SQLException u) { throw new RuntimeException(u); }
		return status;
	}

	// ------------------------------------------------------------------------ //

	public Institution get(int id) {
		
		Institution institution = null;
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = "SELECT * FROM institutions WHERE id = " + id;
			
			ResultSet rs = st.executeQuery(sql);	
	        
			if(rs.next()) institution = new Institution(rs.getInt("id"), rs.getString("username"), rs.getString("name"), rs.getString("password"), rs.getString("image_url"), rs.getInt("category"), rs.getString("address"), rs.getString("phone"), rs.getString("description"));
			
	        st.close();
		} 
		catch(Exception e) { System.err.println(e.getMessage()); }
		return institution;
	}
	
	// ------------------------------------------------------------------------ //

	public Institution getUser(String username) {
		
		Institution institution = null;
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = "SELECT * FROM institutions WHERE username = '" + username + "';";
			
			ResultSet rs = st.executeQuery(sql);	
	        
			if(rs.next()) institution = new Institution(rs.getInt("id"), rs.getString("username"), rs.getString("name"), rs.getString("password"), rs.getString("image_url"), rs.getInt("category"), rs.getString("address"), rs.getString("phone"), rs.getString("description"));
			
	        st.close();
		} 
		catch(Exception e) { System.err.println(e.getMessage()); }
		return institution;
	}
	
	// ------------------------------------------------------------------------ //

	public Institution getOffset(int index) {
		
		Institution institution = null;
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = "SELECT * FROM carousel LIMIT 1 OFFSET " + index;
			
			ResultSet rs = st.executeQuery(sql);	
	        
			if(rs.next()) institution = new Institution(rs.getInt("id"), rs.getString("username"), rs.getString("name"), rs.getString("password"), rs.getString("image_url"), rs.getInt("category"), rs.getString("address"), rs.getString("phone"), rs.getString("description"));
			
	        st.close();
		} 
		catch(Exception e) { System.err.println(e.getMessage()); }
		return institution;
	}
	
	// ------------------------------------------------------------------------ //

	public List<Institution> getAll() { 
		
		List<Institution> institutions = new ArrayList<Institution>();
		
		try {
			
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM institutions");
			
	        while(rs.next()) {	       
	        	
	        	Institution i = new Institution(rs.getInt("id"), rs.getString("username"), rs.getString("name"), rs.getString("password"), rs.getString("image_url"), rs.getInt("category"), rs.getString("address"), rs.getString("phone"), rs.getString("description"));
	        	
	        	institutions.add(i);
	        }
	        
	        st.close();
	        
		} 
		catch (Exception e) { System.err.println(e.getMessage()); }
		return institutions;
		
	}
	
	// ------------------------------------------------------------------------ //

	public boolean update(Institution institution) {
		
		boolean status = false;
		
		try {
			
			String sql = "UPDATE institutions SET "
					   + "username = '" + institution.getUsername() + "', "
					   + "name = '" + institution.getName() + "', " 
					   + "password = '" + institution.getPassword() + "', " 
					   + "image_url = '" + institution.getImageUrl() + "', " 
					   + "category = " + institution.getCategory() + ", " 
					   + "address = '" + institution.getAddress() + "', " 
					   + "phone = '" + institution.getPhone() + "', "
					   + "description = '" + institution.getDescription() + "' "
					   + "WHERE id = " + institution.getId();
			
			PreparedStatement st = conexao.prepareStatement(sql);
			
			st.executeUpdate();
			st.close();
			status = true;
			
		} 
		catch (SQLException u) { throw new RuntimeException(u); }
		return status;
	}
	
	// ------------------------------------------------------------------------ //

	public boolean delete(int id) {
		
		boolean status = false;
		
		try {
			
			Statement st = conexao.createStatement();
			
			st.executeUpdate("DELETE FROM institutions WHERE id = " + id);
			st.close();
			status = true;
		} 
		catch (SQLException u) { throw new RuntimeException(u); }
		return status;
	}
}