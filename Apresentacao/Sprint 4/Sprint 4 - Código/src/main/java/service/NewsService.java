package service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.json.JSONArray;
import DAO.NewsDAO;

import model.News;
import spark.Request;
import spark.Response;

public class NewsService {

	//DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssX");
	DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSX");

	private NewsDAO newsDAO = new NewsDAO();

	public NewsService() {}
	
	public boolean insert(Request request, Response response) throws ParseException {
		
		boolean resp = false;
		
		int inst_id = Integer.parseInt(request.queryParams("inst_id"));
		Date date = df.parse(request.queryParams("date"));
		
		String title = request.queryParams("title"),
		description = request.queryParams("description"),
		image_url = request.queryParams("image_url");
		
		News news = new News(-1, inst_id, date, title, description, image_url);
		
		if(newsDAO.insert(news) == true) {
			
			resp = true;
			
			response.status(201);
		}
		else response.status(404);
		return resp;
	}

	public JSONArray getAll(Request request, Response response) {
		
		int inst_id = Integer.parseInt(request.params(":inst_id"));		
		
		JSONArray maior = new JSONArray();
        
		for(News i : newsDAO.getAll(inst_id)) {
			
			maior.put(i.toJson());
		}
		return maior == null ? null : maior;
	}

	public boolean update(Request request, Response response) {
		
		boolean resp = false;
        int id = Integer.parseInt(request.params(":id"));
		
        News news = newsDAO.get(id);

        if(news != null) {

        	news.setTitle(request.queryParams("title"));
        	news.setDescription(request.queryParams("description"));
        	news.setImageUrl(request.queryParams("image_url"));
        	
        	newsDAO.update(news);
        	
        	response.status(200);
        	
        	resp = true;
        } 
        else response.status(404);
        return resp;
	}

	public boolean delete(Request request, Response response) {
		
		boolean resp = false;
        int id = Integer.parseInt(request.params(":id"));
        
        News news = newsDAO.get(id);

        if(news != null) {
        	
        	newsDAO.delete(id);
            
            resp = true;
            
            response.status(200);
        } 
        else {
        	
        	resp = false;
        	
            response.status(404);
        }
		return resp;
	}
}
