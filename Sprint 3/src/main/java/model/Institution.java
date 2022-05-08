package model;

import org.json.JSONObject;

public class Institution {
	
	private int id, category;
	private String username, name, password, image_url, address, phone, description;
	
	public Institution() {
		
		id = -1;
		category = -1;
		username = "";
		name = "";
		password = "";
		image_url = "";
		address = "";
		phone = "";
		description = "";
	}

	public Institution(int id, String username, String name, String password, String image_url, int category, String address, String phone, String description) {
		
		setId(id);
		setUsername(username);
		setName(name);
		setPassword(password);
		setImageUrl(image_url);
		setCategory(category);
		setAddress(address);
		setPhone(phone);
		setDescription(description);
	}		
	
	public int getId() { return id; }
	public String getUsername() { return username; }
	public String getName() { return name; }
	public String getPassword() { return password; }
	public String getImageUrl() { return image_url; }
	public int getCategory() { return category; }
	public String getAddress() { return address; }
	public String getPhone() { return phone; }
	public String getDescription() { return description; }
	
	public void setId(int id) { this.id = id; }
	public void setUsername(String username) { this.username = username; }
	public void setName(String name) { this.name = name; }
	public void setPassword(String password) { this.password = password; }
	public void setImageUrl(String image_url) { this.image_url = image_url; }
	public void setCategory(int category) { this.category = category; }
	public void setAddress(String address) { this.address = address; }
	public void setPhone(String phone) { this.phone = phone; }
	public void setDescription(String description) { this.description = description; }
	
	public JSONObject toJson() {
		
        JSONObject obj = new JSONObject();
        
        obj.put("id", this.id);
        obj.put("username", this.username);
        obj.put("name", this.name);
        obj.put("password", this.password);
        obj.put("image_url", this.image_url);
        obj.put("category", this.category);
        obj.put("address", this.address);
        obj.put("phone", this.phone);
        obj.put("description", this.description);
        
        return obj;
    }
}
