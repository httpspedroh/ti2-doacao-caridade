package model;

import java.util.Date;

import org.json.JSONObject;

public class News {
	
	private int id, inst_id;
	private String title, description, image_url;
	private Date date;
	
	public News() {
		
		id = -1;
		inst_id = -1;
		date = new Date();
		title = "";
		description = "";
		image_url = "";
	}

	public News(int id, int inst_id, Date date, String title, String description, String image_url) {
		
		setId(id);
		setInstId(inst_id);
		setDate(date);
		setTitle(title);
		setDescription(description);
		setImageUrl(image_url);
	}		
	
	public int getId() { return id; }
	public int getInstId() { return inst_id; }
	public Date getDate() { return date; }
	public String getTitle() { return title; }
	public String getDescription() { return description; }
	public String getImageUrl() { return image_url; }
	
	public void setId(int id) { this.id = id; }
	public void setInstId(int inst_id) { this.inst_id = inst_id; }
	public void setDate(Date date) { this.date = date; }
	public void setTitle(String title) { this.title = title; }
	public void setDescription(String description) { this.description = description; }
	public void setImageUrl(String image_url) { this.image_url = image_url; }
	
	public JSONObject toJson() {
		
        JSONObject obj = new JSONObject();
        
        obj.put("id", this.id);
        obj.put("inst_id", this.inst_id);
        obj.put("date", this.date);
        obj.put("title", this.title);
        obj.put("description", this.description);
        obj.put("image_url", this.image_url);
        return obj;
    }
}
