using System;
using System.IO;
using System.Reflection;
using Application.ValueService;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Persistence;

namespace JustinBlog {
  public class Startup {
    public Startup (IConfiguration configuration) {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices (IServiceCollection services) {
      services.AddDbContext<DataContext> (opt => {
        opt.UseSqlite ("Data Source=blogging.db");
      });
      services.AddCors (opt => {
        opt.AddPolicy ("CorsPolicy", policy => {
          policy.AllowAnyHeader ().AllowAnyMethod ().WithOrigins ("http://localhost:3000");
        });
      });
      services.AddControllers ();
      services.AddSwaggerGen (c => {
        var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
        var xmlPath = Path.Combine (AppContext.BaseDirectory, xmlFile);
        c.IncludeXmlComments (xmlPath);
      });
      services.AddScoped<IValueService, ValueService> ();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure (IApplicationBuilder app, IWebHostEnvironment env) {
      if (env.IsDevelopment ()) {
        app.UseDeveloperExceptionPage ();
      }

      app.UseSwagger ();
      app.UseSwaggerUI (c => {
        c.SwaggerEndpoint ("/swagger/v1/swagger.json", "Justin Blog API");
      });

      app.UseDefaultFiles ();
      app.UseStaticFiles ();

      app.UseRouting ();
      app.UseCors ("CorsPolicy");

      app.UseAuthorization ();

      app.UseEndpoints (endpoints => {
        endpoints.MapControllers ();
      });
    }
  }
}