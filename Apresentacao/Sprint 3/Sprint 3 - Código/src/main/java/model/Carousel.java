package model;

import org.json.JSONObject;

public class Carousel {
	
	private int id;
	private String image_url, description;
	
	public Carousel() {
		
		id = -1;
		image_url = "";
		description = "";
	}

	public Carousel(int id, String image_url, String description) {
		
		setId(id);
		setImageUrl(image_url);
		setDescription(description);
	}		
	
	public int getId() { return id; }
	public String getImageUrl() { return image_url; }
	public String getDescription() { return description; }
	
	public void setId(int id) { this.id = id; }
	public void setImageUrl(String image_url) { this.image_url = image_url; }
	public void setDescription(String description) { this.description = description; }
	
	public JSONObject toJson() {
		
        JSONObject obj = new JSONObject();
        
        obj.put("id", this.id);
        obj.put("image_url", this.image_url);
        obj.put("description", this.description);
        
        return obj;
    }
}
