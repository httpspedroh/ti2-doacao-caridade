package app;

import static spark.Spark.*;
import service.InstitutionService;
import service.CarouselService;
import service.NewsService;

public class Aplicacao {
	
	private static InstitutionService institutionService = new InstitutionService();
	private static CarouselService carouselService = new CarouselService();
	private static NewsService newsService = new NewsService();
	
    public static void main(String[] args) {
        
    	port(6587);
    	
    	staticFiles.location("/public");
    
        get("/institutions", (request, response) -> institutionService.getAll(request, response));
        post("/institutions/insert", (request, response) -> institutionService.insert(request, response));
        get("/institutions/:id", (request, response) -> institutionService.get(request, response));
        get("/institutions/offset/:index", (request, response) -> institutionService.getOffset(request, response));
        get("/institutions/user/:username", (request, response) -> institutionService.getUser(request, response));
        post("/institutions/update/:id", (request, response) -> institutionService.update(request, response));
        get("/institutions/delete/:id", (request, response) -> institutionService.delete(request, response));
        
        get("/carousel", (request, response) -> carouselService.getAll(request, response));
        get("/carousel/offset/:index", (request, response) -> carouselService.getOffset(request, response));
        post("/carousel/insert", (request, response) -> carouselService.insert(request, response));
        get("/carousel/delete/:id", (request, response) -> carouselService.delete(request, response));
        
        get("/news/:inst_id", (request, response) -> newsService.getAll(request, response));
    }
}