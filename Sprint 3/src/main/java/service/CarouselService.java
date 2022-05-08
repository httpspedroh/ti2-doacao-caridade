package service;

import org.json.JSONArray;
import org.json.JSONObject;

import DAO.CarouselDAO;
import model.Carousel;
import spark.Request;
import spark.Response;

public class CarouselService {

	private CarouselDAO carouselDAO = new CarouselDAO();

	public CarouselService() {}
	
	public boolean insert(Request request, Response response) {
		
		boolean resp = false;
		
		String image_url = request.queryParams("image_url"),
		description = request.queryParams("description");
		
		Carousel carousel = new Carousel(-1, image_url, description);
		
		if(carouselDAO.insert(carousel) == true) {
			
			resp = true;
			
			response.status(201);
		}
		else response.status(404);
		return resp;
	}
	
	public JSONObject getOffset(Request request, Response response) {
		
		int index = Integer.parseInt(request.params(":index"));		
		Carousel resp = carouselDAO.getOffset(index);
		
		if(resp != null) response.status(200);
        else response.status(404);
		
		return resp == null ? null : resp.toJson();
	}
	
	public JSONArray getAll(Request request, Response response) {
		
		JSONArray maior = new JSONArray();
        
		for(Carousel i : carouselDAO.getAll()) {
			
			maior.put(i.toJson());
		}
		return maior == null ? null : maior;
	}
	
	public boolean delete(Request request, Response response) {
		
		boolean resp = false;
        int id = Integer.parseInt(request.params(":id"));
        
        Carousel carousel = carouselDAO.get(id);

        if(carousel != null) {
        	
        	carouselDAO.delete(id);
            
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
