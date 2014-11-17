package fr.post.CoonLab;

import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.images.*;
import com.googlecode.objectify.annotation.*;

@Entity
@Cache
public class PostEntity {
	@Id Long id;
	@Index String titre;
	String soustitre;
	@Index BlobKey key;
	String urlImage;
	String content;
	
	private PostEntity(){};
	public  PostEntity(String titre,String soustitre,BlobKey key,String content) {
		ImagesService imageService = ImagesServiceFactory.getImagesService();
		
		this.titre = titre;
		this.soustitre = soustitre;
		this.key = key;
		this.urlImage = imageService.getServingUrl(ServingUrlOptions.Builder.withBlobKey(key));
		this.content = content;
	}
	public Long getId() {
		return id;
	}
	public String getTitre() {
		return titre;
	}
	public String getSoustitre() {
		return soustitre;
	}
	public BlobKey getKey() {
		return key;
	}
	public String getUrlImage() {
		return urlImage;
	}
	public String getContent() {
		return content;
	}
	
	

}
